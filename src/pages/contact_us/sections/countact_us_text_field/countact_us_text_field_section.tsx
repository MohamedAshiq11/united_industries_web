import "./countact_us_text_field_section.css";
import SharedComponenets from "../../../../shared/components/index";

const CountactUsTextFieldSection = () => {
  return (
    <section id="countact-us-text-field">
      <div className="wrapper">
        <div className="content-container">
          <input
            type="text"
            className="text-field"
            placeholder="Your Full Name"
          />
          <input
            type="text"
            className="text-field"
            placeholder="Your Email Address"
          />
        </div>
        <div className="content-container">
          <input
            type="text"
            className="text-field"
            placeholder="Your Phone Number"
          />
          <input
            type="text"
            className="text-field"
            placeholder="Your Address"
          />
        </div>
        <textarea
          className="multiline-text-field"
          placeholder="Enter Your Message Here..."
        />
        <SharedComponenets.CustomButton
          text="Submit Message"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default CountactUsTextFieldSection;
