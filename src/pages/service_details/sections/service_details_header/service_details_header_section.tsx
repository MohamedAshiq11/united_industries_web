import SharedComponents from "../../../../shared/components/index";
import ServiceImages from "../../../../assets/images/service/index";

interface Props {
  title: string;
}

const ServiceDetailsHeaderSection = (props: Props) => {
  return (
    <section id="service-details-header">
      <SharedComponents.CommonHeader
        title={props.title}
        showContactCard={true}
        image={ServiceImages.serviceDetailsHeader}
      />
    </section>
  );
};

export default ServiceDetailsHeaderSection;
