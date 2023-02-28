import React from "react";
import logofooter from "../assets/img/webp/logo-Tot-c.webp";

function Footer() {
  return (
    <>
      <section className=" bg_bluedark  footer overflow-hidden">
        <div
          className=" container"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="1000"
        >
          <div>
            {" "}
            <div className="d-flex justify-content-center gap-5 py-5 mb-5">
              {" "}
              <span className="pe-5 afterline position-relative">
                <img
                  className="logo_footer "
                  src={logofooter}
                  alt="footerlogo"
                />
              </span>
              <h2 className=" ff_poppins fs22 fw_600 text_white">
                Virtual Class <span className="d-block"> for Zoom</span>
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-7 mx-auto ">
                <h3 className="text-center text_darkgrey pb-3 ff_poppins fw_600 fs26">
                  Subscribe to get our Newsletter
                </h3>
                <div className=" gap-3 d-flex flex-column d-md-block">
                  <span className=" ms-md-4 ps-md-5 ">
                    <input
                      type="text"
                      className=" py-3 rounded-5 px-4 ms-md-5"
                      placeholder="Your Email"
                    />
                  </span>
                  <span className="ms-4 d-inline-block">
                    <a
                      href="/"
                      className=" btn_subscribe bg_bluesky px-5 py-3 rounded-5 d-inline-block"
                    >
                      Subscribe
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap- pt-5 mt-4">
              <span className="afterline position-relative px-2 d-inline-block  ">
                <a className="text_grey ff_poppins fw_400 fs22" href="/">
                  Careers
                </a>
              </span>
              <span className="afterline position-relative px-2 my-0 ">
                <a className="text_grey ff_poppins fw_400 fs22" href="/">
                  Privacy Policy
                </a>
              </span>
              <span className="afterline position-relative px-2 my-0 ">
                <a className="text_grey ff_poppins fw_400 fs22" href="/">
                  Terms & Conditions
                </a>
              </span>
            </div>
            <div className="p">
              <h4 className="text_grey ff_poppins fs22 fw_400 text-center py-4 mb-0">
                © 2021 Class Technologies Inc.{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
