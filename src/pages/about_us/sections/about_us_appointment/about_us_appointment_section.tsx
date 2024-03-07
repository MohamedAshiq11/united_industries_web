import "./about_us_appointment_section.css";
import AboutUsIcons from "../../../../assets/icons/about_us/index";
import SharedComponenets from "../../../../shared/components/index";

const AboutUsAppointmentSection = () => {
  return (
    <section id="about-us-appointment">
      <div className="wrapper">
        <div className="content-container">
          <div className="request-appointment">
            <SharedComponenets.AboutSectionTitle text="Appointment" />
            <div className="title">Request a Quote</div>
            <div className="content-container">
              <input
                type="text"
                placeholder="Full Name"
                className="appointment-text-field"
              />
              <input
                type="text"
                placeholder="E - Mail"
                className="appointment-text-field"
              />
            </div>
            <div className="content-container">
              <input
                type="text"
                placeholder="Phone Number"
                className="appointment-text-field"
              />
              <input
                type="text"
                placeholder="Select Service"
                className="appointment-text-field"
              />
            </div>
            <textarea
              placeholder="Message"
              className="appointment-multiline-text-field"
            />
            <SharedComponenets.CustomButton
              text="Appointment"
              onClick={() => {}}
            />
          </div>
          <div className="about-us-service">
            <SharedComponenets.ServiceInfoCard
              image={AboutUsIcons.aboutUsService1}
              title="High Quality Build"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <SharedComponenets.ServiceInfoCard
              image={AboutUsIcons.aboutUsService2}
              title="High Quality Build"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <SharedComponenets.ServiceInfoCard
              image={AboutUsIcons.aboutUsService3}
              title="High Quality Build"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsAppointmentSection;
