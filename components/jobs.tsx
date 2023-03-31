interface JobsProps {
  job: string
  description: string[]
}

export default function Jobs(props: JobsProps): JSX.Element {
  const { job, description } = props;
  const bullets = [];
  for (let des in description) {

  }
  return (
    <section>
      <h1>{job}</h1>
      <ul>

      </ul>
    </section>
  );
}