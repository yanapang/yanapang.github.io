import Head from 'next/head';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { GetStaticPropsContext } from 'next';
import NavHeader from '@/pages/components/NavHeader';
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
    <>
      <Head>
        <title>{postData.title} | Yana&apos;s Blog</title>
        {postData.description && <meta name="description" content={postData.description} />}
        <meta property="og:title" content={postData.title} />
        {postData.description && <meta property="og:description" content={postData.description} />}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={postData.date} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <NavHeader />
        <main className="flex-1 container mx-auto px-6 py-10 max-w-3xl">
          <div className="mb-6">
            {postData.category && (
              <span className="inline-block text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full mb-3">
                {postData.category}
              </span>
            )}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{postData.title}</h1>
            <p className="text-sm text-gray-500">{postData.date}</p>
          </div>
          <article
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
