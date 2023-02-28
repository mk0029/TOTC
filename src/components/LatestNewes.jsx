import React from "react";
import LaPtOp from "../assets/img/png/IMgLapTop.png";
import MyNewes from "./News";
import cutedirlusingipod from "../assets/img/png/cuteGIRLusingIPAD.png";
import AmanUsingLaptop from "../assets/img/png/AmanUsingLaptop.png";
import SOMEvfxONscreeen from "../assets/img/png/SOMEvfxONscreeen.png";
import Carousel from "react-bootstrap/Carousel";
import { MyNewes2 } from "./News";
function LatestNewes() {
  return (
    <>
      {" "}
      <section className="my-xl-5 my-md-4 my-sm-3 my-2 Newws overflow-hidden">
        <div className=" container">
          <h2 className=" ff_poppins fw_700 ff_nunito fs36 text_primery text-center">
            Lastest News and Resources
          </h2>
          <p className="ff_poppins fw_400 fs24 text_grey py-xxl-5 py-xl-4 py-lg-3 py-2 text-center">
            See the developments that have occurred to TOTC in the world
          </p>
          <div className="">
            <div className="row justify-content-between">
              <div
                className="col-xxl-5"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos="fade-right"
              >
                <div className="my-lg-4 my-3 my-xxl-0 h-100 d-flex flex-column justify-content-between">
                  <span>
                    <img className="w-100" src={LaPtOp} alt="" />
                  </span>
                  <span className=" btn_nwwes my-4  d-inline-block d-flex justify-content-center align-items-center ">
                    <a href="#" className="text-white ff_poppins fw_500 fs22">
                      NEWS
                    </a>
                  </span>
                  <h3 className=" ff_poppins fw_600 fs24 text_primery">
                    Class adds $30 million to its balance sheet for a
                    Zoom-friendly edtech solution
                  </h3>
                  <p className=" ff_poppins fw_400 fs20 text_lightdrey ">
                    Class, launched less than a year ago by Blackboard
                    co-founder Michael Chasen, integrates exclusively...
                  </p>
                  Read more
                </div>
              </div>
              <div className="col-xxl-6">
                <div
                  className="d-flex flex-column gap-4 d-none d-sm-flex"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  data-aos="fade-left"
                >
                  {MyNewes.map((mydata, i) => {
                    if (i <= 2) {
                      return (
                        <div
                          className="d-flex flex-column align-items-center align-items-md-start flex-md-row gap-3"
                          data-aos-easing="linear"
                          data-aos-duration="2000"
                          data-aos="fade-right"
                        >
                          <span>
                            <img
                              className="img_news"
                              src={mydata.Image}
                              alt=""
                            />
                          </span>
                          <div className="d-flex flex-column ">
                            {" "}
                            <h4 className=" ff_poppins fs22 fw_500 lh_30 ">
                              {mydata.data1}
                            </h4>
                            <p className=" ff_poppins fs20 fw_400 lh_30">
                              {mydata.data2}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <Carousel className="d-sm-none">
                  <Carousel.Item>
                    <div className="d-flex gap-3">
                      <span>
                        <img
                          className="img_news"
                          src={cutedirlusingipod}
                          alt=""
                        />
                      </span>
                      <div className="d-flex flex-column ">
                        {" "}
                        <h4 className=" ff_poppins fs22 fw_500 lh_30 ">
                          Class Technologies Inc. Closes $30 Million Series A
                          Financing to Meet High Demand
                        </h4>
                        <p className=" ff_poppins fs20 fw_400 lh_30">
                          Class Technologies Inc., the company that created
                          Class,...
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="d-flex gap-3">
                      <span>
                        <img
                          className="img_news"
                          src={AmanUsingLaptop}
                          alt=""
                        />
                      </span>
                      <div className="d-flex flex-column ">
                        {" "}
                        <h4 className=" ff_poppins fs22 fw_500 lh_30 ">
                          Class Technologies Inc. Closes $30 Million Series A
                          Financing to Meet High Demand
                        </h4>
                        <p className=" ff_poppins fs20 fw_400 lh_30">
                          Class Technologies Inc., the company that created
                          Class,...
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="d-flex gap-3">
                      <span>
                        <img
                          className="img_news"
                          src={SOMEvfxONscreeen}
                          alt=""
                        />
                      </span>
                      <div className="d-flex flex-column ">
                        {" "}
                        <h4 className=" ff_poppins fs22 fw_500 lh_30 ">
                          Class Technologies Inc. Closes $30 Million Series A
                          Financing to Meet High Demand
                        </h4>
                        <p className=" ff_poppins fs20 fw_400 lh_30">
                          Class Technologies Inc., the company that created
                          Class,...
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNewes;
