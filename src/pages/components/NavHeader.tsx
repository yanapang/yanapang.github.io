import Link from 'next/link';
import Image from 'next/image';

export default function NavHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className={'container'}>
        <Link className="navbar-brand" href="/">
          <Image src="/post/archive.svg" alt="archive_logo" width="30" height="30" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link" href="#">Features</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link" href="#">Pricing</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link disabled" href="#">Disabled</a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
}
