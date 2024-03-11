import Sections from "./sections/index";

const ContactUs = () => {
  return (
    <section id="contact-us">
      {/* Contact Us Section: Header Section */}
      <Sections.ContactUsHeaderSection />

      {/* Contact Us Section: Text Field Section */}
      <Sections.CountactUsTextFieldSection />

      {/* Contact Us Section: Map Section */}
      <Sections.ContactUsMapSection />

      {/* Contact Us Section: Info Section */}
      <Sections.ContactUsInfoSection />
    </section>
  );
};

export default ContactUs;
