import "./our_projects_section.css";
import homeImage from "../../../../assets/images/home/index";
import SharedComponenet from "../../../../shared/components/index";

const OurProjectsSection = () => {
  return (
    <section id="home-our-projects">
      <div className="wrapper">
        <div className="content-container">
          <SharedComponenet.AboutSectionTitle text="Our Works" />
          <SharedComponenet.SectionTitle text="Our Special Projects" />
          <div className="project-image-card">
            <img src={homeImage.projectImg1} alt="" className="first-image" />
            <img src={homeImage.projectImg2} alt="" className="second-images" />
            <img src={homeImage.projectImg3} alt="" className="third-images" />
            <img src={homeImage.projectImg4} alt="" className="fourth-images" />
            <img src={homeImage.projectImg5} alt="" className="fifth-images" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjectsSection;
