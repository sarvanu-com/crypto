import { Metadata } from 'next';
import Link from 'next/link';
import { getAllNews } from '@/lib/news';

export const metadata: Metadata = {
  title: 'News & Announcements',
  description: 'Stay updated with the latest news, research, and announcements from Texnova.',
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Texnova News</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
        Stay up to date with our latest product launches, research, and enterprise crypto insights.
      </p>

      <div className="grid gap-8">
        {news.map((article) => (
          <article key={article.id} className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
            <Link href={`/news/${article.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                {article.title}
              </h2>
            </Link>
            <div className="text-sm text-slate-500 mb-4">
              {new Date(article.publishedAt).toLocaleDateString()} - by {article.author}
            </div>
            <p className="text-slate-700 dark:text-slate-200 mb-4">
              {article.description}
            </p>
            <div className="flex gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
