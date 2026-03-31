
import { useParams } from "react-router-dom";
import JobDetailData from "../JobDetailData";
// import job_pic from "../../src/assets/job_logo.webp";

const JobDetail = () => {
  const { id } = useParams(); // get the job id from the URL

  // Find the job in your data
  const job = JobDetailData.find((item) => item.id === Number(id));

  if (!job) {
    return <h2>Job not found</h2>; // in case ID is invalid
  }
  return (
    <section className="job_detail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="job_post">
              <div className="job_head">
                <div className="time">10 min</div>
                <div className="save">
                  <i className="ri-save-line"></i>
                </div>
              </div>

              <div className="job_body">
                <div className="job_img">
                  {/* <img src={job_pic} alt="job" /> */}
                </div>
                <div className="job_content">
                  <div className="job_header">
                    Corporate Solutions Executive
                  </div>
                  <div className="desc">Leffler and Sons</div>
                </div>
              </div>

              <div className="job_footer">
                <button className="d_btn">Apply Job</button>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="job_detail_content">
              <div key={job.id}>
                {/* Job Description */}
                <div className="wrapped">
                  <div className="title">Job Description</div>
                  <div className="desc">{job.jobDesc}</div>
                </div>

                {/* Responsibilities */}
                <div className="wrapped">
                  <div className="title">Key Responsibilities</div>
                  <ul>
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>
                        <i className="ri-check-line"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Professional Skills */}
                <div className="wrapped">
                  <div className="title">Professional Skills</div>
                  <ul>
                    {job.professionalSkills.map((skill, index) => (
                      <li key={index}>
                        <i className="ri-check-line"></i>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags (Unlimited) */}
                <div className="wrapped">
                  <div className="title">Tags</div>
                  <div className="tags">
                    {job.tags.map((tag, index) => (
                      <div className="type" key={index}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="job_overview">
              <div className="overview">
                <div className="overview_title">Job title</div>
                <div className="overview_desc">
                  {job.title}
                </div>
              </div>
               <div className="overview">
                <div className="overview_title">Job Type</div>
                <div className="overview_desc">
                  {job.title}
                </div>
              </div>
              <div className="overview">
                <div className="overview_title">Category</div>
                <div className="overview_desc">
                  {job.category}
                </div>
              </div>
              <div className="overview">
                <div className="overview_title">Experience</div>
                <div className="overview_desc">
                  {job.Experience}
                </div>
              </div>
                <div className="overview">
                <div className="overview_title">Degree</div>
                <div className="overview_desc">
                  {job.Degree}
                </div>
              </div>
              <div className="overview">
                <div className="overview_title">Offered Salary</div>
                <div className="overview_desc">
                  {job.Offered_Salary}
                </div>
              </div>
               <div className="overview">
                <div className="overview_title">Location</div>
                <div className="overview_desc">
                  {job.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
