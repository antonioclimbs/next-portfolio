interface JobProps {
  job: string
  description: string[]
}

export default function Job(props: JobProps): JSX.Element {
  const { job, description } = props
  const bullets: JSX.Element[] = description.map((des) => {
    return (
      <h3 className="font-bold my-3 max-w-[460px] text-xl text-orange-800 dark:text-orange-100">
        {des}
      </h3>
    )
    // return <li>{des}</li>
  })

  // return <Box text={box} r={r} c={i} handleBoxClick={handleBoxClick} />
  // for (let i = 0; i < description.length; i++) {
  //   const ele = <li>{description[i]}</li>
  //   bullets.push();
  // }
  // need to loop through all bullets of description and push them into bullets array as list elements
  return (
    <section className="mb-10">
      <h2 className="font-bold text-2xl mb-3 mt-4 max-w-[600px] text-orange-800 dark:text-orange-200">{job}</h2>
      <ul className="">
        {bullets}
      </ul>
    </section>
  );
}