// src/pages/index.tsx
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '@/lib/posts';

type Post = {
    slug: string;
    title: string;
    date: string;
};

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
    return (
        <main className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">📚 My Blog</h1>
            <ul>
                {allPostsData.map(({slug, title, date}) => (
                    <li key={slug}>
                        <Link href={`/posts/${slug}`} className="text-xl text-blue-600 hover:underline">
                            {title}
                        </Link>
                        <div className="text-sm text-gray-500">{date}</div>
                    </li>
                ))}
            </ul>

        </main>
    );
}
