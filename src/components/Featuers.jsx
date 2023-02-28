import React from "react";
import grup2 from "../assets/img/png/Group2.png";
import windotyplogo from "../assets/img/png/WIndotyplogo.png";
import Overlaytyplogo from "../assets/img/png/Overlaytyplogo.png";
import Gruplogo from "../assets/img/png/users 2.png";
import CUtegirl2 from "../assets/img/png/CUTEGIRL2.png";
import grup4 from "../assets/img/png/Group4.png";
import smilegirl from "../assets/img/png/Smiling girl.png";
import star from "../assets/img/png/Star 1.png";

function Featuers() {
  return (
    <>
      <section className="py-xxl-5 py-lg-4 py-3 overflow-hidden">
        <div className=" container">
          <h2 className=" ff_poppins fs36 fw_600 text_primery text-center mb-3">
            Our<span className=" text_secondrey"> Features</span>
          </h2>
          <p className="text_lightgrey ff_poppins fw_400 fs24 text-center">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
          <div className=" py-lg-4 py-3">
            <div className="row">
              <div className="col-xxl-7">
                <div className="">
                  <img className="w-100" src={grup2} alt="" />
                </div>
              </div>
              <div className="col-xxl-5">
                <div className="d-flex flex-column justify-content-center gap-4 h-100">
                  <h3 className="ff_poppins fs40 fw_600 text_primery  mb-3">
                    A <span className=" text_secondrey">user interface</span>{" "}
                    designed for the classroom
                  </h3>
                  <div className="d-flex align-items-center gap-4">
                    <span>
                      <img src={windotyplogo} alt="logo" />
                    </span>
                    <p className=" ff_poppins fw_400 fs22 lh_30 mb-0">
                      Teachers don’t get lost in the grid view and have a
                      dedicated Podium space.
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <span>
                      <img src={Overlaytyplogo} alt="logo" />
                    </span>
                    <p className=" ff_poppins fw_400 fs22 lh_30 mb-0">
                      Teachers don’t get lost in the grid view and have a
                      dedicated Podium space.
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <span>
                      <img src={Gruplogo} alt="logo" />
                    </span>
                    <p className=" ff_poppins fw_400 fs22 lh_30 mb-0">
                      Teachers don’t get lost in the grid view and have a
                      dedicated Podium space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-lg-4 py-3 my-xxl-5 my-md-4 my-2">
            <div className="row flex-column-reverse flex-xl-row justify-content-between">
              <div className="col-xl-5 ">
                <div className="d-flex flex-column justify-content-center ga-md-4 gap-3 gap-xl-5 h-100">
                  <h2 className="ff_poppins fs40 fw_600 text_primery  mb-3">
                    <span className=" text_secondrey"> Tools </span> For
                    Teachers <span className="d-block"> And Learners</span>
                  </h2>
                  <p className="ff_poppins fw_400 fs22 lh_30 mb-0">
                    Class has a dynamic set of teaching tools built to be
                    deployed and used during class. Teachers can handout
                    assignments in real-time for students to complete and
                    submit.
                  </p>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <img className="cutegirl2" src={CUtegirl2} alt="" />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="py-lg-4 py-3 my-xxl-5 my-md-4 my-2">
            <div className="row  justify-content-between">
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <img className="img_assignmnets" src={grup4} alt="" />
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5 ">
                <div className="d-flex flex-column justify-content-center ga-md-4 gap-3 gap-xl-5 h-100">
                  <h2 className=" ff_nunito fs40 fw_700 text_primery  mb-3">
                    <span className="d-block ff_poppins fw_600">
                      {" "}
                      Assessments,
                    </span>
                    <span className=" text_secondrey"> Quizzes, </span> Tests
                  </h2>
                  <p className="ff_poppins fw_400 fs22 lh_40 mb-0">
                    Easily launch live assignments, quizzes, and tests. Student
                    results are automatically entered in the online gradebook.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-xxl-5 py-lg-4 py-3 my-xxl-5 my-md-4 my-2">
            <div className="row flex-column-reverse flex-xl-row justify-content-between">
              <div className="col-xl-5 ">
                <div className="d-flex flex-column justify-content-center ga-md-4 gap-3 gap-xl-5 h-100 mt-5 pt-5">
                  <h6>TESTIMONIAL</h6>
                  <h2 className=" ff_nunito fs60 fw_700 text_primery">
                    What They Say?
                  </h2>
                  <p className="ff_poppins fw_400 fs22 lh_30 mb-0">
                    TOTC has got more than 100k positive ratings from our users
                    around the world.{" "}
                    <span className="d-block py-xxl-3 py-xxl-2">
                      Some of the students and teachers were greatly helped by
                      the Skilline.
                    </span>
                    <span className="d-block py-xxl-3 py-xxl-2">
                      Are you too? Please give your assessment
                    </span>
                  </p>
                  <label
                    htmlFor="assessment"
                    className=" w-100 b0rderassessment"
                  >
                    <div className="d-flex input align-items-center justify-content-between">
                      <input
                        type="text"
                        className="  inp w-100"
                        placeholder="Write your assessment"
                      />
                      <button className="but ff_poppins fs20 fw_700">
                        &rarr;
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="d-flex justify-content-center position-relative">
                  <img className="smilegirl w-100" src={smilegirl} alt="" />
                  <div className="bg-white ps-5 pe-xl-5 pe-md-4 pe-3 py-xl-5 py-md-4 py-3 position-absolute boxposition overflow-hidden">
                    <div className=" position-relative overlaybox d-flex flex-column justify-content-between">
                      <div className="overlay position-absolute d-flex justify-content-center pt-5"></div>
                      <p className=" bg-white  ff_nunito fs22 fw_400">
                        "Thank you so much for your help. It's exactly what I've
                        been looking for. You won't regret it. It really saves
                        me time and effort. TOTC is exactly what our business
                        has been lacking."
                      </p>
                      <div className="d-flex justify-content-between">
                        <h4>Gloria Rose</h4>
                        <div>
                          <span>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                          </span>
                          <h6>12 reviews at Yelp</h6>
                        </div>
                      </div>
                    </div>
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

export default Featuers;
