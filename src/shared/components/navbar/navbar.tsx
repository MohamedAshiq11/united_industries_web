import "./navbar.css";
import { useState } from "react";
import Global from "../../../assets/icons/navbar/index";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <span className="main">United</span>{" "}
            <span className="sub">Industries</span>
          </div>
          <ul>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
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
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
