import ServiceImages from "../../../../assets/images/service/index";
import SharedComponenets from "../../../../shared/components/index";

const ServiceHeaderSection = () => {
  return (
    <section id="service-header">
      <SharedComponenets.CommonHeader
        title="Services"
        showContactCard={true}
        image={ServiceImages.serviceHeader}
      />
    </section>
  );
};

export default ServiceHeaderSection;
