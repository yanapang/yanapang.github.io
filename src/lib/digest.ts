// Client-safe: types and pure utilities only (no fs/path)

export interface DigestArticle {
  source: string;
  title: string;
  url: string;
  published: string;
  summary: string;
}

export interface DigestEntry {
  date: string;
  generatedAt: string;
  articles: DigestArticle[];
}

export function groupBySource(articles: DigestArticle[]): Record<string, DigestArticle[]> {
  return articles.reduce<Record<string, DigestArticle[]>>((acc, article) => {
    if (!acc[article.source]) acc[article.source] = [];
    acc[article.source].push(article);
    return acc;
  }, {});
}
