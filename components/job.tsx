interface JobProps {
  job: string,
  title: string,
  description: string[]
}

export default function Job(props: JobProps): JSX.Element {
  const { job, description, title } = props
  const bullets: JSX.Element[] = description.map((des) => {
    return (
      <h3 className="my-3 text-xl text-orange-800 dark:text-orange-100">
        {des}
      </h3>
    )
  })

  return (
    <section className="mb-14">
      <div className="grid grid-flow-col">
        <h2 className="font-bold text-3xl mb-3 mt-4 w-flex text-orange-800 dark:text-orange-200">{job}</h2>
        <span className="font-medium text-2xl mb-3 mt-5 w-full text-right dark:text-white-800">{title}</span>
      </div>
      <ul className="">
        {bullets}
      </ul>
    </section>
  );
}