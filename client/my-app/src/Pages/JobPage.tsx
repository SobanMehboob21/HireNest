import { useNavigate } from "react-router-dom";
import MyData from "../Data";
import JobPageCard from "../JobPageCards";
import "../styles/JobPage.css";

const JobPage = () => {
  const dataToShow = MyData.slice(0, 5);
  const navigate = useNavigate();
  return (
    <>
      <div className="job">
        <div className="title">Jobs</div>
      </div>
      <div className="job_wrapper">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-3">
              <div className="job_filter_wrap">
                <div className="title">Search by Job Title</div>
                <div className="job_filter_input">
                  <i className="ri-search-line"></i>
                  <input
                    className="job_filter_input_field"
                    placeholder="Job title or company"
                  />
                </div>
                <div className="title">Location</div>
                <div className="job_filter_input">
                  <i className="ri-search-line"></i>
                  <input
                    className="job_filter_input_field"
                    placeholder="Job title or company"
                  />
                </div>
                <div className="title">Category</div>
                <div className="options">
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <button className="d_btn">Show more</button>
                </div>
                {/*  */}
                <div className="title"> Job Type</div>
                <div className="options">
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                </div>
                {/*  */}
                <div className="title">Experience Level</div>
                <div className="options">
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                </div>
                {/*  */}
                <div className="title">Date Posted</div>
                <div className="options">
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                  <div className="option_type">
                    <div className="option_check">
                      <input type="checkbox" className="check-box" />
                      <div className="sub_title">Commerce</div>
                    </div>
                    <div className="num">1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="job_results_wrap">
                <div className="job_result_header">
                  <div className="results">
                    Showing {dataToShow.length} of {MyData.length} results
                  </div>
                  <button className="filter">Sort by latest</button>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    {dataToShow.length > 0 ? (
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
                                  <div className="job_header">
                                    {item.job_type}
                                  </div>
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
                                    <span className="about_detail">
                                      {item.type}
                                    </span>
                                  </div>
                                  <div className="about">
                                    <i className="ri-briefcase-line"></i>
                                    <span className="about_detail">
                                      {item.salary}
                                    </span>
                                  </div>
                                  <div className="about">
                                    <i className="ri-briefcase-line"></i>
                                    <span className="about_detail">
                                      {item.area}
                                    </span>
                                  </div>
                                </div>

                                <button
                                  className="d_btn"
                                  onClick={() =>
                                    navigate(`/job-detail/${item.id}`)
                                  }
                                >
                                  Job Details
                                </button>
                              </div>
                            </div>
                          </>
                        ))}
                      </>
                    ) : (
                      <h1>click on view all</h1>
                    )}
                  </div>
                  <div className="col-lg-12">
                    <div className="pagination_wrap">
                      <ul className="pagination">
                        <li>
                          <a href="#">&laquo;</a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">&raquo;</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="top_companies">
                <div className="rap">
                  <div className="title">Top Company</div>
                  <div className="desc">
                    At eu lobortis pretium tincidunt amet lacus ut aenean
                    aliquet. Blandit a massa elementum
                  </div>
                </div>
                <div className="row">
                  {JobPageCard.map((items) => (
                    <div className="col-lg-3">
                      <>
                        <div className="card">
                          <img className="card_img" src={items.img} />
                          <div className="name">{items.name}</div>
                          <div className="desc">{items.desc}</div>
                          <div className="tag">{items.available_jobs}</div>
                        </div>
                      </>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPage;
