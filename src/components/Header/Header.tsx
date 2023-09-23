import { useEffect, useState } from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import cls from "classnames";

import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg";

const Header = ({ custom }: { custom?: boolean }) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {}, []);

  return (
    <header
      className={cls(
        "header",
        custom && "header--1",
        openNavbar && "navbar--open"
      )}
    >
      <div className="container header__container">
        <h1 className="header__brand" onClick={() => navigate("/")}>
          <span>get</span>
          <span>linked</span>
        </h1>
        <ul className="header__navbar">
          <li className="header__navbar-item">
            <Link to="/#timeline" className="header__navbar-link">
              Timeline
            </Link>
          </li>
          <li className="header__navbar-item">
            <Link to="/#overview" className="header__navbar-link">
              Overview
            </Link>
          </li>
          <li className="header__navbar-item">
            <Link to="/#faqs" className="header__navbar-link">
              FAQs
            </Link>
          </li>
          <li className="header__navbar-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cls("header__navbar-link", isActive && "active")
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="header__btn">
            <button
              className={cls(
                "btn",
                ["/register", "/register"].includes(pathname) && "active"
              )}
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </li>
        </ul>
        <div className="header__toggle">
          <button
            className="header__toggle-main"
            onClick={() => setOpenNavbar((on) => !on)}
          >
            <img src={menu} alt="" />
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
