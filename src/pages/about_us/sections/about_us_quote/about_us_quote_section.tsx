import "./about_us_quote_section.css";
import AboutUsComponents from "../../components/index";
import SharedComponents from "../../../../shared/components/index";

const AboutUsQuoteSection = () => {
  return (
    <section id="about-us-quote">
      <div className="wrapper">
        <div className="about-us-quote-content">
          <div className="heading">Get a Quote</div>
          <div className="title">Build Your Future Today</div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <SharedComponents.CustomButton
            text="Appointment"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="wrapper about-us-quote-cards">
        <AboutUsComponents.AboutUsQuoteCard
          number={1}
          title="Kind Consulation"
          subtitle="Etiam ac leo at quam aliquet"
        />
        <AboutUsComponents.AboutUsQuoteCard
          number={2}
          title="Kind Consulation"
          subtitle="Etiam ac leo at quam aliquet"
        />
        <AboutUsComponents.AboutUsQuoteCard
          number={3}
          title="Kind Consulation"
          subtitle="Etiam ac leo at quam aliquet"
        />
      </div>
    </section>
  );
};

export default AboutUsQuoteSection;
