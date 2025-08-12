import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Yana&apos;s Blog</h3>
            <p>A personal blog where I share my journey and insights on web development and technology. Thanks for stopping by!</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/posts">Posts</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect with Me</h4>
            <div className="social-icons">
              <a href="https://github.com/yanapang" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                {/* Add GitHub Icon Here */}
              </a>
              <a href="https://linkedin.com/in/yanapang" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {/* Add LinkedIn Icon Here */}
              </a>
              <a href="mailto:yana@example.com" aria-label="Email">
                {/* Add Email Icon Here */}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Yana&apos;s Blog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
