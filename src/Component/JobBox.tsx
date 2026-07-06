import React from "react";

type Job = {
  companyName: string;
  position: string;
  applicationDate: string;
  id?: number;
};

export function JobBox() {
  const [formData, setFormData] = React.useState<Job>({
    companyName: "",
    position: "",
    applicationDate: ""
  });

  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [submit, setSubmit] = React.useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newJob: Job = { ...formData, id: Date.now() };
    setJobs((prevJobs) => [newJob, ...prevJobs]);
    setFormData({ companyName: "", position: "", applicationDate: "" });
    setSubmit(true);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // Load from localStorage once
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem('jobs');
      if (raw) setJobs(JSON.parse(raw));
    } catch (e) {}
  }, []);

  // Persist when jobs change
  React.useEffect(() => {
    try {
      localStorage.setItem('jobs', JSON.stringify(jobs));
    } catch (e) {}
  }, [jobs]);

  function deleteJob(id?: number) {
    if (!id) return;
    setJobs((prev) => prev.filter((j) => j.id !== id));
  }

  function initials(name: string) {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  return (
    <div className="app-root">
      <section className="form-area">
        <form onSubmit={handleSubmit} className="job-form">
          <h1>Add Job</h1>
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            placeholder="Application Date"
            name="applicationDate"
            value={formData.applicationDate}
            onChange={handleChange}
          />
          <button type="submit">Add Job</button>
        </form>
      </section>

      {/* display the list of jobs added by the user-form */}
      <div className="display">
        <h2>Job Listings</h2>
        {jobs.length === 0 ? (
          <div className="empty-state">No jobs yet — add your first application.</div>
        ) : (
          <ul className="jobbox">
            {jobs.map((job: Job) => (
              <li key={job.id} className="job">
                <div className="card-header">
                  <span className="avatar">{initials(job.companyName || 'J')}</span>
                  <div className="card-title">
                    <h3>{job.companyName}</h3>
                    <div className="position">{job.position}</div>
                  </div>
                  <div className="actions">
                    <button className="btn-delete" onClick={() => deleteJob(job.id)}>Delete</button>
                  </div>
                </div>

                <div className="meta">{job.applicationDate ? new Date(job.applicationDate).toLocaleDateString() : '—'}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}