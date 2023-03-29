import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import ViewCounter from './view-counter';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Learn more about my past experience.',
};

export default async function ExperiencePage() {
  return (
    <section>
      <h1 className="font-bold text-5xl font-serif mb-5">Experience</h1>
      {/* {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/experience/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
              <ViewCounter slug={post.slug} trackView={false} />
            </div>
          </Link>
        ))} */}
    </section>
  );
}
