// Server-only: fs operations used exclusively in getStaticProps / getStaticPaths
import fs from 'fs';
import path from 'path';
import type { DigestEntry } from './digest';

const digestDirectory = path.join(process.cwd(), 'src/data/digest');

export function getDigestDates(): string[] {
  if (!fs.existsSync(digestDirectory)) return [];
  return fs.readdirSync(digestDirectory)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .sort((a, b) => b.localeCompare(a));
}

export function getDigestByDate(date: string): DigestEntry | null {
  const filePath = path.join(digestDirectory, `${date}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as DigestEntry;
}

export function getLatestDigest(): DigestEntry | null {
  const dates = getDigestDates();
  if (dates.length === 0) return null;
  return getDigestByDate(dates[0]);
}
