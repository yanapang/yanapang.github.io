import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData, Post } from '../lib/posts';
import NavHeader from '@/pages/components/NavHeader';
import Footer from '@/pages/components/Footer';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="hero-title">Welcome to Yana&apos;s Blog</h1>
          <p className="hero-subtitle">Thoughts, experiences, and insights from a developer&apos;s journey</p>
          <div className="hero-buttons">
            <Link href="/posts" className="btn-primary">Read Posts</Link>
            <Link href="/about" className="btn-secondary">About Me</Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Posts Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Latest Posts</h2>
            
            {allPostsData.length > 0 ? (
              <div className="posts-grid">
                {allPostsData.map(({ id, date, title, category, excerpt, readingTime }) => (
                  <div key={id} className="post-card">
                    <div className="post-card-content">
                      <div className="post-meta">
                        {category && <span className="category-badge">{category}</span>}
                        <span>{date}</span>
                        <span>•</span>
                        <span>{readingTime} min read</span>
                      </div>
                      <h3>
                        <Link href={`/posts/${id}`}>{title}</Link>
                      </h3>
                      {excerpt && <p>{excerpt}</p>}
                      <Link href={`/posts/${id}`} className="read-more">
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-posts">
                <p>No posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
