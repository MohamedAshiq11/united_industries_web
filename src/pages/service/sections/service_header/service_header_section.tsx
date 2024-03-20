import ServiceImages from "../../../../assets/images/service/index";
import SharedComponents from "../../../../shared/components/index";

const ServiceHeaderSection = () => {
  return (
    <section id="service-header">
      <SharedComponents.CommonHeader
        title="Services"
        showContactCard={true}
        image={ServiceImages.serviceHeader}
      />
    </section>
  );
};

export default ServiceHeaderSection;
