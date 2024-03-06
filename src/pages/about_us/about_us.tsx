import Sections from "./sections/index";

const AboutUs = () => {
  return (
    <section id="about_us">
      {/* About Us Section: Header Section */}
      <Sections.AboutUsHeaderSection />

      {/* About Us Section: Info Section */}
      <Sections.AboutUsInfoSection />

      {/* About Us Section: Quote Section */}
      <Sections.AboutUsQuoteSection />

      {/* About Us Section: Appointment Section */}
      <Sections.AboutUsAppointmentSection />
    </section>
  );
};

export default AboutUs;
