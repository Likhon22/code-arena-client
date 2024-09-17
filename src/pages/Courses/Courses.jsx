import "../../style/subjects.css";
import java from "../../assets/images/courses/java-course.jpg";
import c from "../../assets/images/courses/c-course.jpg";
import javascript from "../../assets/images/courses/javascript-course.jpg";
import python from "../../assets/images/courses/python-course.png";
import algo from "../../assets/images/courses/algo-course.jpg";
import web from "../../assets/images/courses/web-course.jpg";
import data from "../../assets/images/courses/data-course.jpg";
import dropdown from "../../assets/images/icon/dropdown.png";
const Courses = () => {
  return (
    <div>
      <div className="title">
        <span>
          Computer Science Courses
          <br />
          on CodeArena
        </span>

        <div className="shortdesc">
          <p>
            Learn programming languages and concepts to prepare for a career in
            <br />
            hardware or software development
          </p>
        </div>
      </div>
      {/* Some KeyWords related to Topic */}
      <div className="course">
        <div className="cbox">
          <div className="det">
            <a href="#java">Java</a>
          </div>
          <div className="det">
            <a href="">Android Development</a>
          </div>
          <div className="det">
            <a href="">FXML</a>
          </div>
          <div className="det">
            <a href="#c++">C++</a>
          </div>
          <div className="det">
            <a href="">Compiler Designing</a>
          </div>
          <div className="det">
            <a href="">Game Development</a>
          </div>
          <div className="det">
            <a href="#algo">Algorithm</a>
          </div>
        </div>
        <div className="cbox">
          <div className="det">
            <a href="#python">Python</a>
          </div>
          <div className="det">
            <a href="">Machine Learning</a>
          </div>
          <div className="det">
            <a href="">Artificial Intelligence</a>
          </div>
          <div className="det">
            <a href="">Networking</a>
          </div>
          <div className="det">
            <a href="">Cyber Security</a>
          </div>
          <div className="det">
            <a href="">Ethical Hacking</a>
          </div>
          <div className="det">
            <a href="#data">Data Structures</a>
          </div>
        </div>
        <div className="cbox">
          <div className="det">
            <a href="#html_css">HTML and CSS</a>
          </div>
          <div className="det">
            <a href="">Full Stack Web Development</a>
          </div>
          <div className="det">
            <a href="">UI Designing</a>
          </div>
          <div className="det">
            <a href="">Adobe XD</a>
          </div>
          <div className="det">
            <a href="">Hardware Designing</a>
          </div>
          <div className="det">
            <a href="#javascript">JavaScript</a>
          </div>
          <div className="det">
            <a href="#html_css">Bootstrap</a>
          </div>
        </div>
      </div>
      <div className="inbt">
        Accelerate your career with Computer Science programs
      </div>
      {/* courses available */}
      <div className="ccard">
        <center>
          <div className="ccardbox">
            <div className="dcard">
              <div className="fpart">
                <img src={java} alt="Java Course" />
              </div>
              <a href="#java">
                <div className="spart">
                  2 Courses <img src={dropdown} alt="Dropdown" />
                </div>
              </a>
            </div>
            <div className="dcard">
              <div className="fpart">
                <img src={python} alt="Python Course" />
              </div>
              <a href="#python">
                <div className="spart">
                  5 Courses <img src={dropdown} alt="Dropdown" />
                </div>
              </a>
            </div>
            <div className="dcard">
              <div className="fpart">
                <img src={c} alt="C Course" />
              </div>
              <a href="#c++">
                <div className="spart">
                  3 Courses <img src={dropdown} alt="Dropdown" />
                </div>
              </a>
            </div>
          </div>
          <div className="ccardbox">
            <div className="dcard">
              <div className="fpart">
                <img src={web} alt="Web Course" />
              </div>
              <a href="#html_css">
                <div className="spart">
                  6 Courses <img src={dropdown} alt="Dropdown" />
                </div>
              </a>
            </div>
            <div className="dcard">
              <div className="fpart">
                <img src={data} alt="Data Course" />
              </div>
              <a href="#data">
                <div className="spart">
                  2 Courses <img src={dropdown} alt="Dropdown" />
                </div>
              </a>
            </div>
            <div className="dcard">
              <div className="fpart">
                <img src={algo} alt="Algorithm Course" />
              </div>
              <a href="#algo">
                <div className="spart">
                  1 Course <img src={dropdown} alt="Dropdown" />
                </div>
              </a>
            </div>
          </div>
        </center>
      </div>
      {/* Videos on JAVA Lectures */}
      <div className="title2" id="java">
        <span>Start Programming with Java</span>
        <div className="shortdesc2">
          <p>Practice and Practice to become a good Java programmer</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2">
          <div className="dcard2">
            <span className="tag">1/8</span>
            <div className="fpart2">
              <img src={java} alt="Java Course" />
              <iframe
                src="https://youtu.be/hf4k4OWlBfI?si=aw3JSGp374S73dxv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Java Course Video 1"
              ></iframe>
            </div>
          </div>
          <div className="dcard2">
            <span className="tag">2/8</span>
            <div className="fpart2">
              <img src={java} alt="Java Course" />
              <iframe
                src="https://youtu.be/hf4k4OWlBfI?si=aw3JSGp374S73dxv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Java Course Video 2"
              ></iframe>
            </div>
          </div>
          <div className="dcard2">
            <span className="tag">3/8</span>
            <div className="fpart2">
              <img src={java} alt="Java Course" />
              <iframe
                src="https://youtu.be/hf4k4OWlBfI?si=aw3JSGp374S73dxv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Java Course Video 3"
              ></iframe>
            </div>
          </div>
          <div className="dcard2">
            <span className="tag">4/8</span>
            <div className="fpart2">
              <img src={java} alt="Java Course" />
              <iframe
                src="https://youtu.be/hf4k4OWlBfI?si=aw3JSGp374S73dxv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Java Course Video 4"
              ></iframe>
            </div>
          </div>
          <div className="dcard2">
            <span className="tag">5/8</span>
            <div className="fpart2">
              <img src={java} alt="Java Course" />
              <iframe
                src="https://youtu.be/hf4k4OWlBfI?si=aw3JSGp374S73dxv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Java Course Video 5"
              ></iframe>
            </div>
          </div>
          <div className="dcard2">
            <span className="tag">6/8</span>
            <div className="fpart2">
              <img src={java} alt="Java Course" />
              <iframe
                src="https://youtu.be/hf4k4OWlBfI?si=aw3JSGp374S73dxv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Java Course Video 6"
              ></iframe>
            </div>
          </div>
          <div className="dcard2">
            <span className="tag">7/8</span>
            <div className="fpart2">
              <img src={java} alt="Java Course" />
              <iframe
                src="https://youtu.be/hf4k4OWlBfI?si=aw3JSGp374S73dxv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Java Course Video 7"
              ></iframe>
            </div>
          </div>
          <div className="dcard2">
            <span className="tag">8/8</span>
            <div className="fpart2">
              <img src={java} alt="Java Course" />
              <iframe
                src="https://youtu.be/hf4k4OWlBfI?si=aw3JSGp374S73dxv"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Java Course Video 8"
              ></iframe>
            </div>
          </div>
        </div>
      </center>
      <br />
      <br />
      <div className="click-me">
        <a
          href="https://www.youtube.com/playlist?list=PLgH5QX0i9K3oAZUB2QXR-dZac0c9HNyRa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to Watch full playlist
        </a>
      </div>
      {/* Videos on C++ Lectures */}
      <div className="title2" id="c++">
        <span>Start Programming with C++</span>
        <div className="shortdesc2">
          <p>Practice and Practice to become a good C++ programmer</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2">
          {Array.from({ length: 8 }, (_, i) => (
            <div className="dcard2" key={i}>
              <span className="tag">{i + 1}/8</span>
              <div className="fpart2">
                <img src={c} alt={`C++ Course ${i + 1}`} />
                <iframe
                  src={`https://www.youtube.com/watch?v=0T4mPpbNs_8&list=PLgH5QX0i9K3q0ZKeXtF--CZ0PdH1sSbYL&index=${
                    i + 1
                  }&ab_channel=AnisulIslam`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`C++ Lecture ${i + 1}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br />
      <br />
      <div className="click-me">
        <a
          href="https://www.youtube.com/playlist?list=PLgH5QX0i9K3q0ZKeXtF--CZ0PdH1sSbYL"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to Watch full playlist
        </a>
      </div>
      {/*  Videos on Python Lectures */}
      <div className="title2" id="python">
        <span>Start Programming with Python</span>
        <div className="shortdesc2">
          <p>Practice and Practice to become a good Python programmer</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2">
          {Array.from({ length: 8 }, (_, i) => (
            <div className="dcard2" key={i}>
              <span className="tag">{i + 1}/8</span>
              <div className="fpart2">
                <img src={python} alt={`Python Course ${i + 1}`} />
                <iframe
                  src="https://www.youtube.com/embed/QXeEoD0pB3E"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Python Lecture ${i + 1}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br />
      <br />
      <div className="click-me">
        <a
          href="https://youtu.be/QXeEoD0pB3E"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to Watch full playlist
        </a>
      </div>

      <div className="title2" id="data">
        <span>Data Structures</span>
        <div className="shortdesc2">
          <p>Make your data structures concepts strong...</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2">
          {Array.from({ length: 8 }, (_, i) => (
            <div className="dcard2" key={i}>
              <span className="tag">{i + 1}/8</span>
              <div className="fpart2">
                <img src={data} alt={`Data Structures Course ${i + 1}`} />
                <iframe
                  src="https://www.youtube.com/embed/Db9ZYbJONHc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Data Structures Lecture ${i + 1}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br />
      <br />
      <div className="click-me">
        <a
          href="https://www.youtube.com/watch?v=Db9ZYbJONHc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to Watch full playlist
        </a>
      </div>
      {/* Videos on Algorithm Lectures */}
      <div className="title2" id="algo">
        <span>Algorithm</span>
        <div className="shortdesc2">
          <p>Make your algorithm concepts clear...</p>
        </div>
      </div>

      <center>
        <div className="ccardbox2">
          {/* Video 1/8 */}
          <div className="dcard2">
            <span className="tag">1/8</span>
            <div className="fpart2">
              <img src={algo} alt="Algorithm Course" />
              <iframe
                src="https://www.youtube.com/embed/0IAPZzGSbME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 2/8 */}
          <div className="dcard2">
            <span className="tag">2/8</span>
            <div className="fpart2">
              <img src={algo} alt="Algorithm Course" />
              <iframe
                src="https://www.youtube.com/embed/0IAPZzGSbME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 3/8 */}
          <div className="dcard2">
            <span className="tag">3/8</span>
            <div className="fpart2">
              <img src={algo} alt="Algorithm Course" />
              <iframe
                src="https://www.youtube.com/embed/0IAPZzGSbME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 4/8 */}
          <div className="dcard2">
            <span className="tag">4/8</span>
            <div className="fpart2">
              <img src={algo} alt="Algorithm Course" />
              <iframe
                src="https://www.youtube.com/embed/0IAPZzGSbME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 5/8 */}
          <div className="dcard2">
            <span className="tag">5/8</span>
            <div className="fpart2">
              <img src={algo} alt="Algorithm Course" />
              <iframe
                src="https://www.youtube.com/embed/0IAPZzGSbME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 6/8 */}
          <div className="dcard2">
            <span className="tag">6/8</span>
            <div className="fpart2">
              <img src={algo} alt="Algorithm Course" />
              <iframe
                src="https://www.youtube.com/embed/0IAPZzGSbME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 7/8 */}
          <div className="dcard2">
            <span className="tag">7/8</span>
            <div className="fpart2">
              <img src={algo} alt="Algorithm Course" />
              <iframe
                src="https://www.youtube.com/embed/0IAPZzGSbME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 8/8 */}
          <div className="dcard2">
            <span className="tag">8/8</span>
            <div className="fpart2">
              <img src={algo} alt="Algorithm Course" />
              <iframe
                src="https://www.youtube.com/embed/0IAPZzGSbME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </center>

      {/* Button to Watch Full Playlist */}
      <div className="click-me mt-12">
        <a href="https://www.youtube.com/watch?v=0IAPZzGSbME" target="_blank">
          Click Here to Watch Full Playlist
        </a>
      </div>

      {/* Videos on HTML and CSS Lectures */}
      <div className="title2" id="html_css">
        <span>Start Programming with HTML and CSS</span>
        <div className="shortdesc2">
          <p>Show your creativity and uniqueness</p>
        </div>
      </div>

      <center>
        <div className="ccardbox2">
          {/* Video 1/8 */}
          <div className="dcard2">
            <span className="tag">1/8</span>
            <div className="fpart2">
              <img src={web} alt="HTML and CSS Course" />
              <iframe
                src="https://www.youtube.com/embed/TKYsuU86-DQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 2/8 */}
          <div className="dcard2">
            <span className="tag">2/8</span>
            <div className="fpart2">
              <img src={web} alt="HTML and CSS Course" />
              <iframe
                src="https://www.youtube.com/embed/TKYsuU86-DQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 3/8 */}
          <div className="dcard2">
            <span className="tag">3/8</span>
            <div className="fpart2">
              <img src={web} alt="HTML and CSS Course" />
              <iframe
                src="https://www.youtube.com/embed/TKYsuU86-DQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 4/8 */}
          <div className="dcard2">
            <span className="tag">4/8</span>
            <div className="fpart2">
              <img src={web} alt="HTML and CSS Course" />
              <iframe
                src="https://www.youtube.com/embed/TKYsuU86-DQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 5/8 */}
          <div className="dcard2">
            <span className="tag">5/8</span>
            <div className="fpart2">
              <img src={web} alt="HTML and CSS Course" />
              <iframe
                src="https://www.youtube.com/embed/TKYsuU86-DQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 6/8 */}
          <div className="dcard2">
            <span className="tag">6/8</span>
            <div className="fpart2">
              <img src={web} alt="HTML and CSS Course" />
              <iframe
                src="https://www.youtube.com/embed/TKYsuU86-DQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 7/8 */}
          <div className="dcard2">
            <span className="tag">7/8</span>
            <div className="fpart2">
              <img src={web} alt="HTML and CSS Course" />
              <iframe
                src="https://www.youtube.com/embed/TKYsuU86-DQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 8/8 */}
          <div className="dcard2">
            <span className="tag">8/8</span>
            <div className="fpart2">
              <img src={web} alt="HTML and CSS Course" />
              <iframe
                src="https://www.youtube.com/embed/TKYsuU86-DQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </center>

      {/* Button to Watch Full Playlist */}
      <div className="click-me m-12">
        <a href="https://www.youtube.com/watch?v=TKYsuU86-DQ" target="_blank">
          Click Here to Watch Full Playlist
        </a>
      </div>
    </div>
  );
};

export default Courses;
