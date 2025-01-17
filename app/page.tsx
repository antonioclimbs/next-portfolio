import Link from 'next/link';
import Image from 'next/image';
import { name, about, bio, tagline, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <p className="max-w-[600px] text-xl pb-3 text-orange-100 dark:text-orange-100">
        Hi, my name is
      </p>
      <h1 className="font-bold text-5xl font-serif">{name}</h1>
      <h2 className="font-bold text-2xl mb-3 mt-4 max-w-[600px] text-orange-800 dark:text-orange-200">
        {tagline()}
      </h2>
      <h3 className="font-bold my-3 max-w-[460px] text-xl text-orange-800 dark:text-orange-100">
        {about()}
      </h3>
      <p className="my-5 w-full text-xl text-orange-100 dark:text-orange-100">
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
