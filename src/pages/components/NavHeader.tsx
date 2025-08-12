import Link from 'next/link';

export default function NavHeader() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Yana&apos;s Blog
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
