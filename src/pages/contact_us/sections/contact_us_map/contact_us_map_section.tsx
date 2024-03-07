import "./contact_us_map_section.css";
import SharedComponents from "../../../../shared/components/index";

const ContactUsMapSection = () => {
  return (
    <section id="contact-us-map">
      <div className="wrapper">
        <SharedComponents.GoogleMap />
      </div>
    </section>
  );
};

export default ContactUsMapSection;
