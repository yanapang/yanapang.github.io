import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export interface Post {
    id: string;
    slug: string;
    title: string;
    date: string;
    category?: string;
    excerpt?: string;
    readingTime: number;
    wordCount: number;
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        // Calculate reading time (average 200 words per minute)
        const wordCount = matterResult.content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        return {
            id,
            slug: id,
            readingTime,
            wordCount,
            ...(matterResult.data as { date: string; title: string; category?: string; excerpt?: string }),
        };
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string; title: string; category?: string; excerpt?: string }),
    };
}

export function getPostsByCategory() {
    const allPosts = getSortedPostsData();
    const categories: { [key: string]: any[] } = {};
    
    allPosts.forEach(post => {
        const category = post.category || 'Uncategorized';
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(post);
    });
    
    return categories;
}

export function getAllCategories() {
    const allPosts = getSortedPostsData();
    const categories = new Set<string>();
    
    allPosts.forEach(post => {
        const category = post.category || 'Uncategorized';
        categories.add(category);
    });
    
    return Array.from(categories).sort();
}
