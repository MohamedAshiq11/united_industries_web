import "./about_us_info_section.css";
import SharedComponents from "../../../../shared/components/index";
import aboutUsImages from "../../../../assets/images/about_us/index";

const AboutUsInfoSection = () => {
  return (
    <section id="about-us-info">
      <div className="wrapper">
        <div className="content-container">
          <div className="about-us-info-img">
            <img src={aboutUsImages.aboutUsInfoImage} alt="" />
            <div className="about-us-info-exp-year">
              <div className="year">25+</div>
              <div className="text">Years of experience</div>
            </div>
          </div>
          <div className="about-us-info-content">
            <div>
              <SharedComponents.AboutSectionTitle text="About US" />
              <div className="title">
                We ‘re providing the best customer service
              </div>
            </div>
            <div className="about-us-info-content-card">
              <div className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div className="name">
                John Doe, <span>CEO</span>
              </div>
            </div>
            <SharedComponents.CustomButton onClick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsInfoSection;
