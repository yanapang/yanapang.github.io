#!/usr/bin/env python3
"""
Daily tech digest fetcher.
Reads sources.json, fetches new articles via RSS,
extracts the feed's built-in description, saves to src/data/digest/YYYY-MM-DD.json.
No external AI API required.
"""

import json
import re
import sys
from datetime import datetime, timezone, timedelta
from pathlib import Path

import feedparser
import requests

_HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; tech-digest-bot/1.0)"}

SCRIPT_DIR = Path(__file__).parent
REPO_ROOT = SCRIPT_DIR.parent
SOURCES_FILE = SCRIPT_DIR / "sources.json"
SEEN_FILE = SCRIPT_DIR / "seen.json"
OUTPUT_DIR = REPO_ROOT / "src" / "data" / "digest"

MAX_ARTICLES_PER_SOURCE = 5
LOOKBACK_DAYS = 2


def load_seen() -> set:
    if SEEN_FILE.exists():
        data = json.loads(SEEN_FILE.read_text(encoding="utf-8"))
        return set(data)
    return set()


def save_seen(seen: set) -> None:
    SEEN_FILE.write_text(
        json.dumps(sorted(seen), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def load_sources() -> list:
    return json.loads(SOURCES_FILE.read_text(encoding="utf-8"))


def strip_html(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"&nbsp;", " ", text)
    text = re.sub(r"&amp;", "&", text)
    text = re.sub(r"&lt;", "<", text)
    text = re.sub(r"&gt;", ">", text)
    text = re.sub(r"&quot;", '"', text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def truncate(text: str, max_chars: int = 300) -> str:
    if len(text) <= max_chars:
        return text
    return text[:max_chars].rsplit(" ", 1)[0] + "…"


def parse_published(entry) -> tuple[datetime | None, str]:
    if hasattr(entry, "published_parsed") and entry.published_parsed:
        try:
            dt = datetime(*entry.published_parsed[:6], tzinfo=timezone.utc)
            return dt, dt.strftime("%Y-%m-%d")
        except Exception:
            pass
    return None, ""


def fetch_articles(sources: list, seen: set) -> list:
    cutoff = datetime.now(timezone.utc) - timedelta(days=LOOKBACK_DAYS)
    articles = []

    for source in sources:
        name = source["name"]
        rss_url = source["rss"]
        print(f"  Fetching: {name} ({rss_url})")

        try:
            resp = requests.get(rss_url, headers=_HEADERS, timeout=15)
            resp.raise_for_status()
            feed = feedparser.parse(resp.text)
        except Exception as e:
            print(f"  [WARN] Failed to fetch {name}: {e}", file=sys.stderr)
            continue

        count = 0
        for entry in feed.entries:
            if count >= MAX_ARTICLES_PER_SOURCE:
                break

            url = entry.get("link", "").strip()
            if not url or url in seen:
                continue

            published_dt, published_str = parse_published(entry)
            if published_dt and published_dt < cutoff:
                continue

            title = strip_html(entry.get("title", "")).strip()
            if not title:
                continue

            raw_summary = ""
            if hasattr(entry, "summary"):
                raw_summary = entry.summary
            elif hasattr(entry, "content") and entry.content:
                raw_summary = entry.content[0].get("value", "")

            summary = truncate(strip_html(raw_summary)) if raw_summary else ""
            if len(summary) < 30:
                summary = ""

            articles.append({
                "source": name,
                "title": title,
                "url": url,
                "published": published_str,
                "summary": summary,
            })
            count += 1

    return articles


def main() -> None:
    kst = timezone(timedelta(hours=9))
    today = datetime.now(kst).strftime("%Y-%m-%d")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    seen = load_seen()
    sources = load_sources()

    print(f"[{today}] Fetching digest...")
    articles = fetch_articles(sources, seen)

    for article in articles:
        seen.add(article["url"])
    save_seen(seen)

    output = {
        "date": today,
        "generatedAt": datetime.now(kst).isoformat(),
        "articles": articles,
    }

    output_file = OUTPUT_DIR / f"{today}.json"
    output_file.write_text(
        json.dumps(output, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Done. {len(articles)} articles → {output_file}")


if __name__ == "__main__":
    main()
