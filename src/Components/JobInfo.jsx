import Duties from "./Duties";

function JobInfo({ jobs, currentItem }) {
  // Destructure the Jobs object
  const { id, order, title, dates, duties, company } = jobs[currentItem];

  return (
    <article className="job-info" key={id}>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}

export default JobInfo;
