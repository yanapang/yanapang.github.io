import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import NavHeader from '@/pages/components/NavHeader';
import Footer from '@/pages/components/Footer';
import { groupBySource, DigestEntry } from '@/lib/digest';

interface DigestDatePageProps {
  digest: DigestEntry;
  prevDate: string | null;
  nextDate: string | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { getDigestDates } = require('@/lib/digest-server');
  const dates: string[] = getDigestDates();
  return {
    paths: dates.map((date) => ({ params: { date } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const date = params?.date as string;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { getDigestByDate, getDigestDates } = require('@/lib/digest-server');
  const digest: DigestEntry | null = getDigestByDate(date);

  if (!digest) return { notFound: true };

  const allDates: string[] = getDigestDates();
  const idx = allDates.indexOf(date);

  return {
    props: {
      digest,
      prevDate: allDates[idx + 1] ?? null,
      nextDate: allDates[idx - 1] ?? null,
    },
  };
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function DigestDatePage({ digest, prevDate, nextDate }: DigestDatePageProps) {
  const grouped = groupBySource(digest.articles);

  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />

      <main className="flex-1">
        <div className="container mx-auto px-6 py-8 max-w-4xl">

          <div className="digest-back-nav">
            <Link href="/digest" className="digest-back-link">← 다이제스트 목록</Link>
          </div>

          <div className="digest-date-header">
            <h1 className="digest-date-title">{formatDate(digest.date)}</h1>
            <span className="digest-count">{digest.articles.length}개 아티클</span>
          </div>

          {digest.articles.length === 0 ? (
            <p className="digest-empty">이 날은 새로운 글이 없었어요.</p>
          ) : (
            Object.entries(grouped).map(([source, articles]) => (
              <div key={source} className="digest-source-group">
                <h3 className="digest-source-name">{source}</h3>
                {articles.map((article) => (
                  <div key={article.url} className="digest-article-card">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="digest-article-title"
                    >
                      {article.title}
                      <span className="digest-external-icon">↗</span>
                    </a>
                    {article.summary && (
                      <p className="digest-article-summary">{article.summary}</p>
                    )}
                    {article.published && (
                      <span className="digest-article-date">{article.published}</span>
                    )}
                  </div>
                ))}
              </div>
            ))
          )}

          <div className="digest-pagination">
            {prevDate ? (
              <Link href={`/digest/${prevDate}`} className="digest-page-btn">
                ← {formatDate(prevDate)}
              </Link>
            ) : <span />}
            {nextDate ? (
              <Link href={`/digest/${nextDate}`} className="digest-page-btn">
                {formatDate(nextDate)} →
              </Link>
            ) : <span />}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
