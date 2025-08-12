import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Yana's Blog</h3>
            <p>Sharing thoughts, experiences, and insights from a developer's journey. Join me as I explore technology, coding, and life.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-links">
              <a href="https://github.com/yanapang" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yanapang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:yana@example.com">Email</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Yana's Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
