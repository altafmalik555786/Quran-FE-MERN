import React from "react";
import "./FaQs.css";
import { NavLink } from "react-router-dom";
import faqs from "../assets/faqs.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headerbg from "../assets/bg-2.png";

const FaQ = () => {
  return (
    <>
      <Navbar />

      {/* page header start */}
      <div className="bgdiv">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${headerbg})`,
          }}
        >
          <div className="d-flex page-header-title justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">FAQs</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="faqs-section-1">
        <div className="container">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-6  faqs-leftside d-flex justify-content-center flex-start flex-column">
              <h1 className="title">Frequently asked question (FaQs)</h1>

              {/* <p className="description">
                Do you want to read the Quran with proper pronunciation
                (Tajweed)? Would you like your child to memorize the Quran
                (Hifz) but don't know where to start? At Qutor, we make it our
                mission to develop innovative tools to help you achieve these
                goals. Whether you are proficient in reading the Quran and want
                to teach others or whether you wish to learn, create an account
                and begin your journey towards success.
              </p> */}

              <br />
              <h3 className="heading">
                If the below question and answer deosn't match you question,
                kindly contact us.
              </h3>
              <div className="text-left col-3 mt-2 findtutor-button">
                <button className="btn mt-3" type="button">
                  <NavLink
                    className="btn-findtutor p-3 btn-findtutor-border"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </button>
              </div>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-4  faqs-rightside d-flex justify-content-center flex-end flex-column">
              <img src={faqs} alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

      <section className="faqs-section-2 mt-5 mb-5">
        <div className="container ">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-6 d-flex justify-content-center flex-start flex-column">
              {/* there is start students and parent question.............................................. */}
              <h1 className="mx-4">Faqs about Students & Parents:</h1>
              <h3 className="mx-4 sub-heading ">
                Click on question to open it's detail!
              </h3>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    How long will it take to learn tajweed/Arabic?
                  </p>
                  <p className="QuestionAnswer">
                    Depending on the intensity of the studies (how many classes
                    you take), it will take adults 8 to 12 weeks for a Tajweed
                    course. For Arabic, a course can last anywhere from 6 to 12
                    months. For children, it depends on their age, aptitude and
                    the support given by parents.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    What is the duration of each class?
                  </p>
                  <p className="QuestionAnswer">
                    You and your tutor can decide how long each session should
                    last. The Virtual Classroom logs the time you spend with
                    your tutor for billing purposes, so there is no restriction
                    on session length.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    Can we choose session timings at my own convenience?
                  </p>
                  <p className="QuestionAnswer">
                    Yes, you can. Each tutor’s schedule is shown on their
                    profile page and you can select any free time slot for your
                    lesson.
                  </p>
                </Link>
              </div>

              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    I have never taken an online course before; will i be able
                    to cope with this?
                  </p>
                  <p className="QuestionAnswer">
                    Allah (swt) makes it easier when we strive to follow His
                    path and learn the Quran. The Classroom sessions are
                    one-on-one and your tutor will teach you at a pace that is
                    comfortable for you inshaAllah.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    Do we have any course meterials?
                  </p>
                  <p className="QuestionAnswer">
                    A digital Quran, tajweed book and other tools like
                    whiteboard and file uploading are present in the Virtual
                    Classroom. Your tutor will upload any materials you need
                    into the classroom and will organise your course materials
                    for you.
                  </p>
                </Link>
              </div>

              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    How can I start learing on QQuranic?
                  </p>
                  <p className="QuestionAnswer">
                    You need to Register or Contact us to start learning at Q
                    Quranic. Click below link for more details. <br />
                    <NavLink className="btn" to="/howitworks">
                      Learn More
                    </NavLink>
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    Do you have female tutors as well as male tutors on
                    QQuranic?
                  </p>
                  <p className="QuestionAnswer">
                    Yes, we have Qariahs from all over the world who teach
                    students. You can filter tutor profiles based on gender by
                    selecting the appropriate check box from the filter.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    What if the tutor misses the lesson or comes late?
                  </p>
                  <p className="QuestionAnswer">
                    It would reflect poorly on a tutor's rating and review if
                    they were consistently late to lessons. Please do speak to
                    your tutor to find out if they had a legitimate reason not
                    to make it to a scheduled lesson.
                  </p>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-6  faqs-rightside d-flex justify-content-center flex-end flex-column">
              <h1 className="mx-4 MainHeading">Faqs about Billing:</h1>
              <h3 className="mx-4 sub-heading ">
                Click on question to open it's detail!
              </h3>

              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    How can I start teaching on QQuranic?
                  </p>
                  <p className="QuestionAnswer">
                    You need to sign up here https://qquranic.com/signup. You
                    can create an account by providing a few basic details. Once
                    signed up, you can create a profile and choose the subjects
                    you wish to teach. Remember to add your qualifications in
                    your profile, which will improve your chances of being
                    contacted by students when they search tutor profiles.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    What do I find and connect with students?
                  </p>
                  <p className="QuestionAnswer">
                    To find students, you can click on the ‘Find Students’ link
                    ( https://qquranic.com/find-quran-students ) and filter the
                    list of students based on what they want to learn and what
                    you would like to teach. You can message students directly
                    to offer them your services. If you think you are a good
                    match, you can set up your first lesson by asking them to
                    click the “Hire” button on your profile page.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    Can I find students from QQuranic and teach them on skype?
                  </p>
                  <p className="QuestionAnswer">
                    Qutor is a place for you to find students. We provide this
                    facility so you can connect with students and teach them
                    using the Qutor classroom environment for one-on-one
                    tutoring. We ask tutors to read our terms and conditions
                    which specify that you must teach students you find on Qutor
                    using Qutor’s classroom.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    Where can I see who has hired me for a job?
                  </p>
                  <p className="QuestionAnswer">
                    When a student hires you, a notification is shown on your
                    dashboard. You must be logged in to view this. You can see
                    the hire request in the “Received Invites” section on the
                    dashboard and can accept or reject the offer from there. We
                    also send you an email when you receive an invite but since
                    emails can sometimes end up in Junk folders, we encourage
                    you to check your Qutor dashboard by logging in regularly.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    How do I show my credibility to students?
                  </p>
                  <p className="QuestionAnswer">
                    Your best chance of getting hired is if you create a great
                    profile. Add your relevant employment details,
                    certifications and qualifications and build a glowing
                    profile, which makes you stand out. Tip: Always ask your
                    students to rate and review you after your contract ends.
                    This helps to build your credibility with future students.
                  </p>
                </Link>
              </div>
              <div className="FaqDiv">
                <Link to="#" className="QuestionButton">
                  <p className="QuestionPeragraph">
                    How do I apear available or unavailable to a student?
                  </p>
                  <p className="QuestionAnswer">
                    Students will see you as available when you are logged in to
                    Qutor. If you are logged out of the site, your status will
                    become unavailable. Also, if you are in a call with another
                    student, you will appear unavailable to other students if
                    they wish to start a call with you.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FaQ;
