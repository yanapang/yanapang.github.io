import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bd-fotoer py-5 mt-5 bg-light position-absolute bottom-0">
      <div
        className="container py-5 text-center"
      >
        © 2025 Copyright:{'Yana '}
        <Link className="text-body" href="/">
          yanapang.github.io
        </Link>
      </div>
    </footer>
  );
}
