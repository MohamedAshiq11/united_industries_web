import "./contact_us_info_section.css";
import homeIcons from "../../../../assets/icons/home/index";
import HeaderMapComponenet from "../../../home/components/index";
import SharedComponenet from "../../../../shared/components/index";

const ContactUsInfoSection = () => {
  return (
    <section id="contact-us-info">
      <div className="wrapper">
        <div className="content-container">
          <SharedComponenet.CustomSmInfoCard
            label="Company Address"
            text="Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA"
          />
          <div className="contact-us-info">
            <HeaderMapComponenet.HomeMapContactCard
              image={homeIcons.homePhone}
              label="Company Phones"
              text1="+ 1 234 5678 098"
              text2="+ 1 634 7638 654"
            />
            <HeaderMapComponenet.HomeMapContactCard
              image={homeIcons.homeChat}
              label="Dustro Emails"
              text1="dustro@gmail.com"
              text2="dustro.info@gmail.com"
              bgColor="blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInfoSection;
