import React, { useState } from "react";
import logo from "../assets/img/webp/logo-Tot-c.webp";
import videobutton from "../assets/img/png/Videobutton.png";
import k250 from "../assets/img/png/250k.png";
import Massage from "../assets/img/png/Massage.png";
import Experience from "../assets/img/png/User.png";
import teenagegirl from "../assets/img/png/lovely-teenage-girl.png";
import wavebootom from "../assets/img/svg/wave.png";

function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className=" bg_hadder min_vh_100 d-flex flex-column position-relative overfow-hidden">
        <img
          className=" position-absolute imghadderbottom w-100"
          src={wavebootom}
          alt=""
        />
        <img
          className="teenagegirl position-absolute"
          src={teenagegirl}
          alt="lovely-teenage-girl"
        />
        <div className=" container z_index_2 ">
          {" "}
          <nav className=" py-2 ">
            <div className=" d-flex justify-content-between align-items-center w-100 ">
              <a
                className="ff_inter fw-semibold fs_18 text-white z_index1"
                href="#"
              >
                <img className="w-50" src={logo} alt="logo" />
              </a>
              <ul
                className="d-flex gap-3  gap-xl-3 gap-xxl-5 py-3 list-unstyled d-none d-xl-flex align-items-center mb-0 justify-content-end"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>
                  <a
                    class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                    href="#"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    class=" ff_poppins fw_400 fs22  text-white z_index text_stroke "
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <span className="btn_totc bg-white btn_hover_bluer d-inline-block d-flex justify-content-center align-items-center">
                  <a href="#" className=" ff_poppins fw_500 fs22">
                    Login
                  </a>
                </span>
                <span className="btn_totc btn_bluer btn_hover_white d-inline-block d-flex justify-content-center align-items-center">
                  <a href="#" className="ff_poppins fw_500 fs22">
                    Sign Up
                  </a>
                </span>
              </ul>
              <label
                className="menu_formatting d-flex justify-content-end d-xl-none"
                for="check"
              >
                <input
                  onClick={() => setNavShow(!navShow)}
                  className="menu bg-black "
                  type="checkbox"
                  id="check"
                />
                <span className="span_nav1"></span>
                <span className="span_nav2"></span>
                <span className="span_nav3"></span>
              </label>
            </div>
            <div className="d-xl-none d-flex ">
              <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
                <ul className="d-flex gap-4  list-unstyled flex-column align-items-center mb-0 justify-content-end">
                  <li>
                    <a
                      class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                      href="#"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      class=" ff_poppins fw_400 fs22 text-white z_index text_stroke "
                      href="#"
                    >
                      About Us
                    </a>
                  </li>

                  <span className="btn_totc bg-white btn_hover_bluer d-inline-block d-flex justify-content-center align-items-center">
                    <a href="#" className=" ff_poppins fw_500 fs22">
                      Login
                    </a>
                  </span>
                  <span className="btn_totc btn_bluer btn_hover_white d-inline-block d-flex justify-content-center align-items-center">
                    <a href="#" className="ff_poppins fw_500 fs22">
                      Sign Up
                    </a>
                  </span>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className=" flex-grow-1 flex-column d-flex justify-content-center align-items-center ">
          <div className=" container">
            <div className="row justify-content-between">
              <div
                className="col-xxl-5"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="d-flex flex-column gap-xxl-5 gap-md-4 gap-3">
                  <h1 className=" ff_poppins fw_700 fs54 text_white">
                    <span className=" text_yellow">Studying</span> Online is now
                    much easier
                  </h1>
                  <p className=" ff_nunito fw_400 fs24 text-white">
                    TOTC is an interesting platform that will teach{" "}
                    <span className="d-block">
                      {" "}
                      you in more an interactive way
                    </span>
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-4 justify-content-between  align-items-center gap-sm-3">
                    <span className="btn_join btn_bluer btn_hover_white d-inline-block d-flex justify-content-center align-items-center px-3">
                      <a href="#" className="ff_poppins fw_400 fs24">
                        Join for free
                      </a>
                    </span>
                    <span>
                      <img className="videobutton" src={videobutton} alt="" />
                    </span>

                    <p className=" ff_poppins fw_400 fs24 text-black">
                      Watch how it works
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-7 h-100 bg_girl my-xxl-0 my-4"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="d-flex flex-column gap-5 justify-content-between h-100 ps-mx-4 z_index_2">
                  <div className="k250 d-flex py-3 px-3 bg-white d-inline-block gap-3 align-items-center  ">
                    <span className="">
                      <img className="w-100" src={k250} alt="k250" />
                    </span>
                    <div className="d-flex flex-column d-inline">
                      {" "}
                      <h2 className=" mb-0 ff_nunito fs24 fw_700 text_grey ">
                        250K
                      </h2>
                      <p className=" mb-0 ff_nunito fs20 fw_600 text_grey">
                        Assisted Student
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-md-end z_index_2">
                    <div className="Congratulations_box d-flex py-3 px-3 bg-white d-inline-block gap-3 align-items-center ">
                      <span className="">
                        <img className="w-100" src={Massage} alt="k250" />
                      </span>
                      <div className="d-flex flex-column d-inline">
                        {" "}
                        <h2 className=" mb-0 ff_nunito fs24 fw_700 text_grey ">
                          Congratulations
                        </h2>
                        <p className=" mb-0 ff_nunito fs20 fw_600 text_grey">
                          Your admission completed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="User_box d-flex py-3 px-3 bg-white d-inline-block gap-3 align-items-center z_index_2 ">
                    <span className="">
                      <img className="w-100" src={Experience} alt="k250" />
                    </span>
                    <div className="d-flex flex-column d-inline">
                      <h2 className=" mb-0 ff_nunito fs24 fw_700 text_grey ">
                        User Experience Class
                      </h2>
                      <p className=" mb-0 ff_nunito fs20 fw_600 text_grey">
                        Today at 12.00 PM
                      </p>{" "}
                      <button className="btn ">Join Now</button>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
