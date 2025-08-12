import { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData, getPostsByCategory, getAllCategories, Post } from '../lib/posts';
import NavHeader from '@/pages/components/NavHeader';
import Footer from './components/Footer';

interface PostsPageProps {
  postsByCategory: { [key: string]: Post[] };
  categories: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  const postsByCategory = getPostsByCategory();
  const categories = getAllCategories();
  
  return {
    props: {
      postsByCategory,
      categories,
    },
  };
};

export default function Posts({ postsByCategory, categories }: PostsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get all posts for "All" category
  const allPosts = Object.values(postsByCategory).flat();
  
  // Filter posts based on selected category and search term
  const getFilteredPosts = () => {
    let posts = selectedCategory === 'All' ? allPosts : postsByCategory[selectedCategory] || [];
    
    if (searchTerm) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return posts;
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <NavHeader />
      
      {/* Posts Hero Section */}
      <section className="posts-hero">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="posts-hero-title">All Posts</h1>
          <p className="posts-hero-subtitle">
            Explore articles organized by categories and find exactly what you're looking for
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="filter-section">
        <div className="container mx-auto px-6 py-8">
          <div className="filter-controls">
            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            {/* Category Filter */}
            <div className="category-filters">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              >
                All ({allPosts.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category} ({postsByCategory[category]?.length || 0})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid Section */}
      <section className="posts-grid-section">
        <div className="container mx-auto px-6 py-8">
          {filteredPosts.length > 0 ? (
            <>
              <div className="posts-count">
                <p>
                  Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>
              
              <div className="posts-grid">
                {filteredPosts.map((post) => (
                  <article key={post.slug} className="post-card">
                    <div className="post-card-content">
                      {post.category && (
                        <span className="post-category">{post.category}</span>
                      )}
                      <h3 className="post-title">
                        <Link href={`/posts/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="post-date">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="post-excerpt">
                        {post.excerpt || 'Click to read this post...'}
                      </p>
                      <Link href={`/posts/${post.slug}`} className="read-more">
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="no-posts">
              <h3>No posts found</h3>
              <p>
                {searchTerm 
                  ? `No posts match your search "${searchTerm}"`
                  : selectedCategory !== 'All' 
                    ? `No posts in "${selectedCategory}" category yet`
                    : 'No posts available yet. Check back soon!'
                }
              </p>
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
