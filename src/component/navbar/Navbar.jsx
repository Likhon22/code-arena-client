import { Link, NavLink } from "react-router-dom";
import icon1 from "../../assets/images/icon/logo.png";
import search from "../../assets/images/icon/search.png";
import "../../style/style.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={icon1} alt="logo" />
      </div>
      <ul>
        <li>
          <NavLink to={"/"} className="active" href="">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/courses"}
            className="active"
            href="subjects/computer_courses.html"
          >
            Courses
          </NavLink>
        </li>
        <li>
          <a className="active" href="">
            Library
          </a>
          <ul className="submenu">
            <li>
              <a href="read.html">Live Reading</a>
            </li>
            <li>
              <a href="#">Download Books</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="active" href="">
            Q&A
          </a>
        </li>
      </ul>
      <div className="srch">
        <input type="text" className="search" placeholder="Search here..." />
        <img src={search} alt="search" />
      </div>
      <Link to={"/register"} className="get-started" href="login.html">
        Register
      </Link>
      <img
        src="images/icon/menu.png"
        className="menu"
        onClick={() => sideMenu(0)}
        alt="menu"
      />
    </nav>
  );
};

export default Navbar;
