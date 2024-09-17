import React from "react";
import icon2 from "../../assets/images/icon/brainbooster.png";
import icon3 from "../../assets/images/icon/information-button.png";
import extra1 from "../../assets/images/extra/e3.jpg";
import service1 from "../../assets/images/icon/computer-courses.png";
import service2 from "../../assets/images/icon/brainbooster.png";
import service3 from "../../assets/images/icon/online-tutorials.png";
import service4 from "../../assets/images/icon/papers.jpg";
import service5 from "../../assets/images/icon/p3.png";
import service6 from "../../assets/images/icon/discussion.png";
import "../../style/style.css";
const Home = () => {
  return (
    <div>
      <div className="head-container">
        <div className="quote">
          <p>Empowering Your CSE Journey with CodeArena</p>
          <h5>
            Welcome to CodeArena, your one-stop destination for unlocking the
            full potential of your computer science education. We understand the
            challenges students face when it comes to accessing high-quality
            learning resources in the Bangla language. CodeArena is here to
            bridge that gap, providing you with a comprehensive online platform
            designed specifically for computer science enthusiasts at the
            university level.
          </h5>
          <div className="play">
            <img src={icon3} alt="about" />
            <span>
              <a href="#about_section" target="_blank">
                More...
              </a>
            </span>
          </div>
        </div>
        <div className="svg-image">
          <img src={icon2} alt="svg" />
        </div>
      </div>
      {/* about */}
      <div className="diffSection mb-20" id="about_section">
        <center>
          <p className="section-title">About</p>
        </center>
        <div className="about-content">
          <div className="side-image">
            <img className="sideImage" src={extra1} alt="About CodeArena" />
          </div>
          <div className="side-text">
            <h2>Why CodeArena?</h2>
            <p>
              The motivation behind CodeArena stems from the absence of a
              dedicated platform for learning computer science in Bangla. Our
              goal is to empower students, like yourself, with a resource that
              makes it easier to clarify concepts, excel in studies, and pursue
              a successful career in the field.
              <br />
              Embark on your CSE journey with confidence. Explore, learn, and
              connect with CodeArena today!
            </p>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="service-swipe">
        <div className="diffSection" id="services_section">
          <center>
            <p
              style={{
                fontSize: "50px",
                padding: "100px",
                paddingBottom: "40px",
                color: "#fff",
              }}
            >
              Services
            </p>
          </center>
        </div>
        <a href="subjects/computer_courses.html">
          <div className="s-card">
            <img src={service1} alt="University-Level CSE Bangla Content" />
            <p>University-Level CSE Bangla Content</p>
          </div>
        </a>
        <a href="subjects/jee.html">
          <div className="s-card">
            <img src={service2} alt="Q&A Community" />
            <p>Q&A Community</p>
          </div>
        </a>
        <a href="#">
          <div className="s-card">
            <img src={service3} alt="Video Courses" />
            <p>Video Courses</p>
          </div>
        </a>
        <a href="subjects/jee.html#sample_papers">
          <div className="s-card">
            <img src={service4} alt="eBook Library" />
            <p>eBook Library</p>
          </div>
        </a>
        <a href="#">
          <div className="s-card">
            <img src={service5} alt="Practice Exercises" />
            <p>Practice Exercises</p>
          </div>
        </a>
        <a href="#contactus_section">
          <div className="s-card">
            <img src={service6} alt="User Engagement" />
            <p>User Engagement</p>
          </div>
        </a>
      </div>
      {/* contact */}
      <div className="diffSection" id="contactus_section">
        <center>
          <p style={{ fontSize: "50px", padding: "100px" }}>Contact Us</p>
        </center>
        <div className="csec"></div>
        <div className="back-contact">
          <div className="cc">
            <form
              action="mailto:roshank9419@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label>
                First Name <span className="imp">*</span>
              </label>
              <label style={{ marginLeft: "185px" }}>
                Last Name <span className="imp">*</span>
              </label>
              <br />
              <center>
                <input
                  type="text"
                  name="fname"
                  style={{ marginRight: "10px", width: "175px" }}
                  required
                />
                <input
                  type="text"
                  name="lname"
                  style={{ width: "175px" }}
                  required
                />
                <br />
              </center>
              <label>
                Email <span className="imp">*</span>
              </label>
              <br />
              <input
                type="email"
                name="mail"
                style={{ width: "100%" }}
                required
              />
              <br />
              <label>
                Message <span className="imp">*</span>
              </label>
              <br />
              <input
                type="text"
                name="message"
                style={{ width: "100%" }}
                required
              />
              <br />
              <label>Additional Details</label>
              <br />
              <textarea name="additional"></textarea>
              <br />
              <button type="submit" id="csubmit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* feedback */}
      <div>
        {/* Feedback Section */}
        <div className="title2" id="feedBACK">
          <span>Give Feedback</span>
          <div className="shortdesc2">
            <p>Please share your valuable feedback with us</p>
          </div>
        </div>

        <div className="feedbox">
          <div className="feed">
            <form
              action="mailto:roshank9419@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label>Your Name</label>
              <br />
              <input type="text" name="fname" className="fname" required />
              <br />
              <label>Email</label>
              <br />
              <input type="email" name="mail" required />
              <br />
              <label>Additional Details</label>
              <br />
              <textarea name="additional"></textarea>
              <br />
              <button type="submit" id="csubmit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Sliding Information */}
        <marquee
          style={{
            background: "linear-gradient(to right, #1E3D59, #1E3D59)",
            marginTop: "50px",
          }}
          direction="left"
          onMouseOver={(e) => e.currentTarget.stop()}
          onMouseOut={(e) => e.currentTarget.start()}
          scrollAmount="20"
        >
          <div className="marqu">
            Discover the power of CodeArena! Your gateway to comprehensive CSE
            learning in Bangla. Join our vibrant community today.
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Home;
