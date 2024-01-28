import "./footer.css";
import QuickLinks from "./components/quick_links.jsx";
import SocialIcons from "../../../assets/icons/global/index";

const Footer = () => {
  return (
    <footer>
      <div className="content-container">
        <div className="primary-color">
          <div className="logo">
            <span className="main">United</span>{" "}
            <span className="sub">Industries</span>
          </div>
          <div className="call-us">Call Us Today</div>
          <div className="phone-number">+ 1 634 7638 654</div>
          <div className="social-icons">
            <div className="social-icon">
              <img className="twitter" src={SocialIcons.twitter} alt="" />
            </div>
            <div className="social-icon">
              <img className="facebook" src={SocialIcons.facebook} alt="" />
            </div>
            <div className="social-icon">
              <img className="linked-in" src={SocialIcons.linkedIn} alt="" />
            </div>
            <div className="social-icon">
              <img className="youtube" src={SocialIcons.youtube} alt="" />
            </div>
          </div>
          <div className="caption">
            Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula, neque
            a velit
          </div>
        </div>
        <div className="secondary-color">
          <div className="content-container">
            <QuickLinks
              title="Quick Links"
              links={[
                { value: "About Company", link: "about" },
                { value: "Our Services", link: "service" },
                { value: "Contacts", link: "contact" },
              ]}
            />
            <QuickLinks
              title="Clients Support"
              links={[
                { value: "Our Process", link: "process" },
                { value: "FAQs", link: "faqs" },
                { value: "Clients Testimonials", link: "testimonials" },
              ]}
            />
          </div>
          <div className="copyright">
            Merkulove © Dustro Template All rights reserved Copyrights 2020
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
