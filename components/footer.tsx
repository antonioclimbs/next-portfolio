import {
  ArrowIcon,
  GitHubIcon,
} from 'components/icons';

export default function Footer() {
  return (
    <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/antonioclimbs"
          className="flex items-center gap-2"
        >
          <GitHubIcon />
          <p className="h-7">checkout my github</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/ayala.photographs/"
        >
          <ArrowIcon />
          <p className="h-7">follow me on instagram</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:ayala.antonio.jesus@gmail.com"
        >
          <ArrowIcon />
          <p className="h-7">email me</p>
        </a>
      </li>
    </ul>
  )
}