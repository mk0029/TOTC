import React from "react";
import TEACHERLEFT from "../assets/img/png/boxteacherleft.png";
import TEACHERRIGHT from "../assets/img/png/boxteacherright.png";
import circle from "../assets/img/png/BGcircle.png";
import circle2 from "../assets/img/png/BGcircle2.png";
function TOTC() {
  return (
    <>
      <section className="my-xl-5 my-md-4 my-sm-3 my-2 overflow-hidden">
        <div className=" container">
          {" "}
          <h2 className="text-center ff_poppins fw_700 fs36">
            What is ?<span className=" text_secondrey"> TOTC</span>
          </h2>
          <p className="text-center ff_poppins fw_400 fs24">
            <span className="d-md-block">
              {" "}
              TOTC is a platform that allows educators to create online classes
              whereby they can
            </span>{" "}
            <span className="d-md-block">
              store the course materials online; manage assignments, quizzes and
              exams; monitor
            </span>{" "}
            due dates; grade results and provide students with feedback all in
            one place.
          </p>
          <div className="py-5">
            <div className="row">
              <div className="col-xxl-6 my-xxl-0 my-4">
                <div className="d-flex justify-content-center justify-content-sm-end px-md-4">
                  {" "}
                  <div className=" d-flex justify-content-center align-items-center  flex-column box_totc">
                    <h2 className=" ff_poppins fs32 fw_600 text_white">
                      FOR INSTRUCTORS
                    </h2>
                    <span className="btn_TOTC bg-transparent d-inline-block d-flex justify-content-center align-items-center">
                      <a href="#" className=" ff_poppins fw_500 fs22">
                        Start a class today
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 my-xxl-0 my-4">
                <div className="d-flex justify-content-start px-sm-4">
                  {" "}
                  <div className=" d-flex justify-content-center align-items-center flex-column box2_totc">
                    <h2 className=" ff_poppins fs32 fw_600 text_white">
                      FOR STUDENTS
                    </h2>
                    <span className="btn_TOTC bg-transparent d-inline-block d-flex justify-content-center align-items-center">
                      <a href="#" className=" ff_poppins fw_500 fs22">
                        Enter access code
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-xxl-5 py-xl-4 py-lg-3 py-2  my-xxl-5 my-xl-4 py-3 ">
            <div className="row flex-column-reverse flex-xxl-row ">
              <div className="col-xxl-6 ">
                <div className="my-5 ">
                  <h2 className=" ff_poppins fw_500 fs36 text_primery">
                    <span className=" position-relative">
                      Everything
                      <img
                        className=" position-absolute circleevery"
                        src={circle}
                        alt=""
                      />
                    </span>
                    you can do in a physical classroom,
                    <span className=" text_secondrey ff_nunito fw_700">
                      you can do with TOTC
                    </span>
                  </h2>
                  <p className=" ff_poppins fw_400 fs24 text_grey py-xxl-5 py-xl-4 py-lg-3 py-2">
                    TOTC’s school management software helps traditional and
                    online schools manage scheduling, attendance, payments and
                    virtual classrooms all in one secure{" "}
                    <span className=" position-relative">
                      {" "}
                      cloud-based{" "}
                      <img
                        className=" position-absolute circl2"
                        src={circle2}
                        alt=""
                      />
                    </span>{" "}
                    system.
                  </p>
                  <a
                    className=" text-decoration-underline ff_poppins fs22 fw_400 text_grey"
                    href="/"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="col-xxl-6 d-flex justify-content-center justify-content-3xl-end">
                <div className="box_teacher position-relative">
                  <img
                    className=" position-absolute TEACHERLEFT"
                    src={TEACHERLEFT}
                    alt="bluebox"
                  />
                  <img
                    className=" position-absolute TEACHERRIGHT"
                    src={TEACHERRIGHT}
                    alt="bluebox"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TOTC;
