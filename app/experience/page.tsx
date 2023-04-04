import type { Metadata } from 'next';
import Link from 'next/link';
import Job from 'components/job';
import { allBlogs } from 'contentlayer/generated';
import jobs from '../../lib/descriptions.json'
import ViewCounter from './view-counter';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Learn more about my past experience.',
};

export default async function ExperiencePage() {
  const allJobs = [] as JSX.Element[];
  for (let i = 0; i < jobs.length; i++) {
    allJobs.push(Job(jobs[i]))
  }
  return (
    <div>
      <h1 className="font-bold text-5xl font-serif mb-5">Experience</h1>
      {/* <p>create a new component to reuse for all experiences</p>
      <p>this can be looped through if desired/needed</p> */}
      {/* {Job(fakeJob['job'], fakeJob['description'])} */}
      {/* {Job(jobs[0])} */}
      {allJobs}
    </div>
  );
};
