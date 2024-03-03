import "./about_us_section.css";
import homeImage from "../../../../assets/images/home/index";
import globalIcon from "../../../../assets/icons/global/index";
import SharedComponenet from "../../../../shared/components/index";

const AboutUsSection = () => {
  return (
    <section id="about-us">
      <div className="wrapper">
        <div className="content-container">
          <div className="about-us-info">
            <SharedComponenet.AboutSectionTitle text="About Us" />
            <SharedComponenet.SectionTitle text="With our knowledge we guarente success" />
            <div className="subtitle">
              <SharedComponenet.CommonText
                text="Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
              congue"
                size="13px"
                fontWeight="700"
                lineHeight="23px"
                textColor="#00215B"
              />
            </div>
            <div className="content">
              <SharedComponenet.CommonText
                text="Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque"
                size="13px"
                fontWeight="400"
                lineHeight="23px"
              />
            </div>
            <SharedComponenet.CustomButton onClick={() => {}} />
          </div>
          <div className="about-us-images">
            <img src={homeImage.groupImg1} alt="" className="group-img-1" />
            <img src={homeImage.groupImg2} alt="" className="group-img-2" />
            <SharedComponenet.SmallContainer image={globalIcon.play} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
