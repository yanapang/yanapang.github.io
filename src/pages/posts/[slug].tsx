import { getPostData, getSortedPostsData } from '@/lib/posts';
import { GetStaticPropsContext } from 'next';
import NavHeader from '@/pages/components/NavHeader';
import SideNav from '@/pages/components/SideNav';
import Footer from '@/pages/components/Footer';

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post: any) => ({ params: { slug: post.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug as string;
  const postData = await getPostData(slug);
  return { props: { postData } };
}

export default function Post({ postData }: any) {
  return (
    <main className="p-8">
      <NavHeader />
      <div className="row">
        <div className="col-2">
          <SideNav />
        </div>
        <div className="col-8">
          <h1 className="text-2xl font-bold">{postData.title}</h1>
          <div className="text-sm text-gray-500 mb-4">{postData.date}</div>
          <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <Footer />
      </div>
    </main>
  );
}
