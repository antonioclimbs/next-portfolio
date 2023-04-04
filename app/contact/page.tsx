import type { Metadata } from 'next';
import Form from './form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in contact with me.',
};

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <section className=''>
      <h1 className="font-bold text-5xl font-serif mb-5">Contact</h1>
      <p className="my-5 text-xl text-orange-100 dark:text-orange-100">Send me a message so we can connect</ p>
      <Form />
      {/* <p className="my-5 w-full text-xl text-orange-100 dark:text-orange-100">Or call me at (909) 568-7639</p> */}
    </section>
  );
}
