import "./navbar.css";
import Global from "../../../assets/icons/navbar/index";

const Navbar = () => {
  return (
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
        <div className="menu">
          <img src={Global.menu} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
