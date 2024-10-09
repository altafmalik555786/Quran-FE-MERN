import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Header.css";

const Header = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uq9l1sm",
        "template_ojzdcyk",
        form.current,
        "owYdIWE4hEb1fwUpn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  // const history = useNavigate();
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   course: "",
  //   country: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  // const Signup = (e) => {
  //   e.preventDefault();
  //   const { name, email, phone, course, country } = user;
  //   if (name && email && phone && course && country) {
  //     axios.post("/signup", user).then((res) => {
  //       alert(res.data.message);
  //       history.push("/");
  //     });
  //   } else {
  //     alert("Please fill all fields correctly!");
  //   }
  // };
  return (
    <>
      <header className="header-section">
        <section className="container header-container ">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Learn Quran with tajweed <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Whether you are proficient in reading the Quran and want to
                teach others or whether you wish to learn, create an account and
                begin your journey towards success.
              </p>
              <h3 className="header-btn-title">
                Want to know more, just reach us?
              </h3>
              <div className="two btn">
                <button className="btn">
                  <a
                    href="tel:+923007575666"
                    className="btn-style1 btn-style-border1"
                    to="tel:+923007575666"
                  >
                    Call Us
                  </a>
                </button>
                <button className="btn">
                  <a
                    href="https://wa.link/p18hhb"
                    className=" btn-style2 btn-style-border2"
                  >
                    WhatsApp Us
                  </a>
                </button>
              </div>
            </div>

            {/*  --------------- header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side ">
              <form
                className="row g-3 form-row shadow p-3 mb-5  rounded"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="col-12 form-rows">
                  <label for="inputName" className="form-label">
                    Student Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_name"
                    id="user_name"
                    placeholder="Enter student's name here"
                    // value={user.name}
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-12 form-rows">
                  <label for="inputFName" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    id="user_email"
                    placeholder="Enter email here"
                    // value={user.email}
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-12 form-rows">
                  <label for="inputNumber" className="form-label">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_phone"
                    id="user_phone"
                    placeholder="Please enter number with country code"
                    // value={user.phone}
                    // onChange={handleChange}
                  />
                </div>

                <div class="col-md-6 form-rows">
                  <label for="inputState" class="form-label">
                    Course
                  </label>
                  <select
                    name="user_course"
                    id="user_course"
                    className="form-select"
                    // value={user.course}
                    // onChange={handleChange}
                  >
                    <option selected>Select Course</option>
                    <option>Basic Qaida</option>
                    <option>Quran with Tajweed</option>
                    <option>Quran Memorization</option>
                    <option>Quran Translation</option>
                    <option>Quran Tafseer</option>
                    <option>Namaz, Kalma, Dua</option>
                  </select>
                </div>
                <div className="col-md-6 form-rows">
                  <label for="inputCity" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_country"
                    id="user_country"
                    placeholder="Entry your country name"
                    // value={user.country}
                    // onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 form-rows">
                  <button
                    type="submit"
                    className="btn home-register-btn"
                    // onClick={Signup}
                  >
                    Get Trial
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
