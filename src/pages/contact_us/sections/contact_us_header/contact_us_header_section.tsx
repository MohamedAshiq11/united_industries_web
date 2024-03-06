import SharedComponenets from "../../../../shared/components/index";
import ContactUsImages from "../../../../assets/images/contact_us/index";

const ContactUsHeaderSection = () => {
  return (
    <section id="about-us-header">
      <SharedComponenets.CommonHeader
        title="Contacts"
        image={ContactUsImages.contactUsHeaderImage}
      />
    </section>
  );
};

export default ContactUsHeaderSection;
