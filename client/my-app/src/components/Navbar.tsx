
import LogoSvg from "../assets/logoSvg.svg";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
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
                  <a href="/Job">Jobs</a>
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
      </div>
    </>
  );
};

export default Navbar;
