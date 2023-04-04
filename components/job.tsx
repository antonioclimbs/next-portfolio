interface JobProps {
  job: string
  description: string[]
}

export default function Job(props: JobProps): JSX.Element {
  const { job, description } = props
  const bullets = [];
  for (let i = 0; i < description.length; i++) {
    const ele = <li>{description[i]}</li>
    bullets.push();
  }
  // need to loop through all bullets of description and push them into bullets array as list elements
  return (
    <section>
      <h1>{job}</h1>
      <ul>
        {/* <li>{description}</li> */}
      </ul>
    </section>
  );
}