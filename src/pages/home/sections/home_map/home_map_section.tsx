import "./home_map_section.css";
import HeaderMapComponenet from "../../components/index";
import homeIcons from "../../../../assets/icons/home/index";
import SharedComponenet from "../../../../shared/components/index";

const HomeMapSection = () => {
  return (
    <section id="home-map">
      <div className="home-google-map">
        <SharedComponenet.GoogleMap />
      </div>
      <div className="wrapper">
        <div className="home-map-info">
          <SharedComponenet.CustomSmInfoCard
            label="Company Address"
            text="Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA"
          />
          <div className="home-map-contact-info">
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

export default HomeMapSection;
