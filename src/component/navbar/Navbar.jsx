import { Link, NavLink } from "react-router-dom";
import icon1 from "../../assets/images/icon/logo.png";
import search from "../../assets/images/icon/search.png";
import "../../style/style.css";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import HeadModal from "../headerModal/HeadModal";
const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const { logout, user } = useAuth();
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to={"/"}>
            <img src={icon1} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent border border-[#1e3d59] font-bold text-black rounded-lg "
                  : " text-white bg-black active"
              }
              to={"/"}
              href=""
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent border border-[#1e3d59] font-bold text-black rounded-lg "
                  : " text-white bg-black active"
              }
              to={"/courses"}
              href="subjects/computer_courses.html"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent border border-[#1e3d59] font-bold text-black rounded-lg "
                  : " text-white bg-black active"
              }
              to={"/reading"}
              href=""
            >
              Live Reading
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent border border-[#1e3d59] font-bold text-black rounded-lg "
                  : " text-white bg-black active"
              }
              to={"/question"}
              href=""
            >
              Q&A
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent border border-[#1e3d59] font-bold text-black rounded-lg "
                  : " text-white bg-black active"
              }
              to={"/chatbot"}
              href=""
            >
              Chatbot
            </NavLink>
          </li>
          <li>
            {user && user?.email && (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent border border-[#1e3d59] font-bold text-black rounded-lg "
                    : " text-white bg-black active"
                }
                to={"/dashboard"}
                href=""
              >
                Dashboard
              </NavLink>
            )}
          </li>
        </ul>
        <div className="srch">
          <input type="text" className="search" placeholder="Search here..." />
          <img src={search} alt="search" />
        </div>
        {user ? (
          <div className="flex items-center gap-6">
            <img
              onClick={() => setIsOpen(true)}
              className="w-[40px] h-[40px] bg-black rounded-full cursor-pointer"
              src={user?.photoURL}
              alt=""
            />
          </div>
        ) : (
          <Link to={"/register"} className="get-started" href="login.html">
            Login
          </Link>
        )}
        <img
          src="images/icon/menu.png"
          className="menu"
          onClick={() => sideMenu(0)}
          alt="menu"
        />
      </nav>
      <HeadModal isOpen={isOpen} closeModal={closeModal}></HeadModal>
    </div>
  );
};

export default Navbar;
