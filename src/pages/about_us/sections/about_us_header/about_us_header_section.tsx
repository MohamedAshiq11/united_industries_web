import SharedComponenets from "../../../../shared/components/index";
import AboutUsImages from "../../../../assets/images/about_us/index";

const AboutUsHeaderSection = () => {
  return (
    <section id="about-us-header">
      <SharedComponenets.CommonHeader
        title="About Us"
        showContactCard={true}
        image={AboutUsImages.aboutUsHeaderImage}
      />
    </section>
  );
};

export default AboutUsHeaderSection;
