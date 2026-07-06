import React from "react";

type Job = {
  companyName: string;
  position: string;
  applicationDate: string;
};

export function JobBox() {
  const [formData, setFormData] = React.useState<Job>({
    companyName: "",
    position: "",
    applicationDate: ""
  });

  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [submit, setSubmit] = React.useState<boolean>(false);

  return (
    <div className="jobbox">
      <form>
        <h1>Add Job</h1>
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Position" />
        <input type="date" placeholder="Application Date" />
        <button>Add Job</button>
      </form>


      <div className="display">
        <h2>Job Listings</h2>
        <ul className="ul1">
          {jobs.map((job: Job, index: number) => (
            <li key={index} className="jobname">
              <p>{job.companyName}</p>
              <p>{job.position}</p>
              <p>{job.applicationDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}