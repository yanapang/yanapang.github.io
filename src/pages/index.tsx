import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import { Post } from '@/types/common/post';
import NavHeader from '@/pages/components/NavHeader';
import SideNav from '@/pages/components/SideNav';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const header = ['Title', 'Created At'];

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <NavHeader />
      <h3>This site is under Construction.</h3>
      <div className="row">
        <div className="col-2">
          <SideNav />
        </div>
        <div className="col-8">
          <div className="container">
            <table className="table">
              <thead>
              <tr>
                {header.map((item) => (<td key={item}>{item}</td>))}
              </tr>
              </thead>
              <tbody>
              {allPostsData.map(({ slug, title, date }, index) => (
                <tr key={slug}>
                  <td>
                    <Link href={`/posts/${slug}`}>
                      {title}
                    </Link>
                  </td>
                  <td className="text-sm text-gray-500">{date}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
