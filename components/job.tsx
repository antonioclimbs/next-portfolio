interface JobProps {
  job: string,
  title: string,
  description: string[]
}

export default function Job(props: JobProps): JSX.Element {
  const { job, description, title } = props
  const bullets: JSX.Element[] = description.map((des) => {
    return (
      <h3 className="font-bold my-3 text-l text-orange-800 dark:text-orange-100">
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
      <div className="grid grid-flow-col ">
        <h2 className="font-bold text-3xl mb-3 mt-4 w-flex text-orange-800 dark:text-orange-200">{job}</h2>
        <span className="font-bold text-2xl mb-3 mt-5 w-full text-right dark:text-white-800">{title}</span>
      </div>
      {/* <span>
        {title}
      </span> */}
      <ul className="">
        {bullets}
      </ul>
    </section>
  );
}