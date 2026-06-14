import Link from 'next/link';
import { GetStaticProps } from 'next';
import NavHeader from '@/pages/components/NavHeader';
import Footer from '@/pages/components/Footer';
import { groupBySource, DigestEntry } from '@/lib/digest';

interface DigestIndexProps {
  latest: DigestEntry | null;
  archiveDates: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { getLatestDigest, getDigestDates } = require('@/lib/digest-server');
  const latest: DigestEntry | null = getLatestDigest();
  const allDates: string[] = getDigestDates();
  const archiveDates = latest ? allDates.slice(1) : allDates;

  return { props: { latest: latest ?? null, archiveDates } };
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function DigestIndex({ latest, archiveDates }: DigestIndexProps) {
  const grouped = latest ? groupBySource(latest.articles) : {};

  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />

      <section className="digest-hero">
        <div className="container mx-auto px-6 py-10 text-center">
          <h1 className="digest-hero-title">Tech Digest</h1>
          <p className="digest-hero-subtitle">매일 아침 업데이트되는 기술 블로그 &amp; 뉴스 요약</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container mx-auto px-6 py-8 max-w-4xl">

          {latest ? (
            <section className="digest-section">
              <div className="digest-date-header">
                <span className="digest-badge">Latest</span>
                <h2 className="digest-date-title">{formatDate(latest.date)}</h2>
                <span className="digest-count">{latest.articles.length}개 아티클</span>
              </div>

              {latest.articles.length === 0 ? (
                <p className="digest-empty">오늘은 새로운 글이 없어요.</p>
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
            </section>
          ) : (
            <div className="digest-empty-state">
              <p>아직 다이제스트가 없어요. 내일 아침 첫 번째 다이제스트가 생성됩니다!</p>
            </div>
          )}

          {archiveDates.length > 0 && (
            <section className="digest-archive">
              <h2 className="digest-archive-title">지난 다이제스트</h2>
              <div className="digest-archive-list">
                {archiveDates.map((date) => (
                  <Link key={date} href={`/digest/${date}`} className="digest-archive-item">
                    <span>{formatDate(date)}</span>
                    <span className="digest-archive-arrow">→</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
