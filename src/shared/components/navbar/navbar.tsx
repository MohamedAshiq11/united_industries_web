import "./navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Global from "../../../assets/icons/navbar/index";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo" onClick={() => navigate("/")}>
            <span className="main">United</span>{" "}
            <span className="sub">Industries</span>
          </div>
          <ul>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
          <div onClick={() => setShowMenu(true)} className="menu">
            <img src={Global.menu} alt="" />
          </div>
        </div>
      </nav>
      <div className={`mobile-nav ${showMenu ? "mobile-nav-ative" : ""}`}>
        <img onClick={() => setShowMenu(false)} src={Global.close} alt="" />
        <ul>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
