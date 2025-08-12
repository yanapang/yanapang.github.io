import Link from 'next/link';
import Image from 'next/image';

export default function NavHeader() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Yana's Blog
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/posts">Posts</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
