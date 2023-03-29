import Link from 'next/link';
import Image from 'next/image';
// import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
// import {
//   ArrowIcon,
//   GitHubIcon,
//   TwitterIcon,
//   ViewsIcon,
// } from 'components/icons';
import { name, about, bio, tagline, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  // let starCount, views, tweetCount;

  // try {
  //   [starCount, views, tweetCount] = await Promise.all([
  //     getStarCount(),
  //     getBlogViews(),
  //     getTweetCount(),
  //   ]);
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <section>
      <p className="max-w-[600px] text-xl pb-3 text-neutral-800 dark:text-neutral-200">
        Hi, my name is
      </p>
      <h1 className="font-bold text-5xl font-serif">{name}</h1>
      <h2 className="font-bold text-2xl mb-3 mt-4 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {tagline()}
      </h2>
      <h3 className="font-bold my-3 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </h3>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <div className='text-xl text-black font-medium'>
        <Link href='/about'>
          <button className='mr-5 border-solid border-2 border-orange-100 bg-orange-100 p-5 px-8 rounded'>About</button>
        </Link>
        <Link href='/experience'>
          <button className='m-5 border-solid border-2 border-orange-100 bg-orange-100 p-5 px-8 rounded'>Experience</button>
        </Link>
        <Link href='/contact'>
          <button className='m-5 border-solid border-2 border-orange-100 bg-orange-100 p-5 px-8 rounded'>Contact</button>
        </Link>
      </div>
    </section>
  );
}
