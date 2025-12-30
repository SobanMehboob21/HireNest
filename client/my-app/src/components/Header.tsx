import React from "react";
import LogoSvg from "../assets/logoSvg.svg";
import bgVideo from "../assets/bgVideo.mp4";
import ppl from "../assets/img1.svg";
import community from "../assets/img2.svg";
import companies from "../assets/img3.svg";
import one from "../assets/a.webp";
import two from "../assets/b.webp";
import three from "../assets/d.webp";
import four from "../assets/e.webp";
import five from "../assets/f.webp";

import "../styles/Home.css";

const Header = () => {
  return (
    <header className="header">
      {/* Background Video */}
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="container-fluid header-content">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="header_logo">
              <img src={LogoSvg} alt="Logo" width={25} height={26} />
              <span> Job Portal</span>
            </div>
          </div>

          <div className="col-lg-8">
            <ul className="nav-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 ">
            <button className="d_btn t_btn">Login</button>
            <button className="d_btn">Register</button>
          </div>
        </div>
      </div>
      {/* mid content */}
      <div className="center_content">
        <div className="center_content_heading">
          <div className="heading">Find Your Dream Job Today!</div>
          <div className="sub_heading">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </div>
        </div>
        <div className="center_main">
          <div className="center_filter">
            <div className="job_input">
              <input
                className="job_input_field"
                placeholder="Job Title or Company"
              />
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>

              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}

            <button className="d_btn">
              <i className="ri-search-line"></i>Search Job
            </button>
          </div>
          <div className="details">
            <div className="detail_part">
              <div className="detail_part_img">
                <img src={ppl} />
              </div>

              <div className="detail_info">
                <div className="number">25,850</div>
                <div className="info">jobs</div>
              </div>
            </div>
            <div className="detail_part">
              <div className="detail_part_img">
                <img src={community} />
              </div>

              <div className="detail_info">
                <div className="number">25,850</div>
                <div className="info">jobs</div>
              </div>
            </div>
            <div className="detail_part">
              <div className="detail_part_img">
                <img src={companies} />
              </div>

              <div className="detail_info">
                <div className="number">25,850</div>
                <div className="info">jobs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_content">
        <img className="bottom_content" src={one} />
        <img className="bottom_content" src={two} />
        <img className="bottom_content" src={three} />
        <img className="bottom_content" src={four} />
        <img className="bottom_content" src={five} />
      </div>
    </header>
  );
};

export default Header;
