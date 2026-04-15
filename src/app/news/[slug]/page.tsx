import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNewsBySlug, getAllNews } from '@/lib/news';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const news = await getAllNews();
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      tags: article.tags,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  // Generative Engine Optimization (GEO) JSON-LD structure
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    image: article.imageUrl ? [article.imageUrl] : [],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: [{
      '@type': 'Person',
      name: article.author,
      url: 'https://texnova.org/team' // Adjust as needed
    }],
    publisher: {
      '@type': 'Organization',
      name: 'Texnova',
      logo: {
        '@type': 'ImageObject',
        url: 'https://texnova.org/icon.svg'
      }
    },
    description: article.description
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <header className="mb-10 text-center">
          <div className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">
            {article.tags[0] || 'News'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            {article.title}
          </h1>
          <div className="text-slate-500 mb-6 mx-auto flex items-center justify-center gap-2">
            <span>{article.author}</span>
            <span>&bull;</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert mx-auto text-slate-800 dark:text-slate-200">
          <p className="lead text-xl mb-8">{article.description}</p>
          {/* Note: If you render HTML from a real CMS, use dangerouslySetInnerHTML={__html: article.content} carefully */}
          <div className="whitespace-pre-wrap">
            {article.content}
          </div>
        </div>
      </article>
    </>
  );
}
