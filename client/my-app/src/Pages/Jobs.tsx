
import MyData from "../Data";
import "../styles/Jobs.css";

export const Jobs = () => {
   const dataToShow = MyData.slice(0, 5);
  return (
    <>
      <section className="available-jobs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <div className="heading_one">
                  <div className="heading">recent jobs available</div>
                  <div className="sub_heading">
                    At eu lobortis pretium tincidunt amet lacus ut aenean
                    aliquet
                  </div>
                </div>
                <div className="heading_two">
                  <a href="">View All</a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {dataToShow.length > 0  ? (
                <>
                  {dataToShow.map((item) => (
                    <>
                      <div className="job_post" key={item.id}>
                        <div className="job_head">
                          <div className="time">{item.time}</div>
                          <div className="save">
                            <i className="ri-save-line"></i>
                          </div>
                        </div>
                        <div className="job_body">
                          <div className="job_img">
                            <img src={item.img} />
                          </div>
                          <div className="job_content">
                            <div className="job_header">{item.job_type}</div>
                            <div className="desc">{item.job_desc}</div>
                          </div>
                        </div>
                        <div className="job_footer">
                          <div className="details">
                            <div className="about">
                              <i className="ri-briefcase-line"></i>
                              <span className="about_detail">
                                {item.about_detail}
                              </span>
                            </div>
                            <div className="about">
                              <i className="ri-briefcase-line"></i>
                              <span className="about_detail">{item.type}</span>
                            </div>
                            <div className="about">
                              <i className="ri-briefcase-line"></i>
                              <span className="about_detail">
                                {item.salary}
                              </span>
                            </div>
                            <div className="about">
                              <i className="ri-briefcase-line"></i>
                              <span className="about_detail">{item.area}</span>
                            </div>
                          </div>

                          <button className="d_btn">Job Details</button>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <h1>click on view all</h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
