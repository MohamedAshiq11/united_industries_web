import "./service_list_section.css";
import ServiceComponents from "../../components/index";
import ServiceImages from "../../../../assets/images/service/index";

const ServiceListSection = () => {
  return (
    <section id="service-list">
      <div className="wrapper">
        <ServiceComponents.ServiceCard
          heading="Service One"
          image={ServiceImages.serviceImg1}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
          onCllick={() => {}}
        />
        <ServiceComponents.ServiceCard
          isEven
          heading="Service Two"
          image={ServiceImages.serviceImg2}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
          onCllick={() => {}}
        />
        <ServiceComponents.ServiceCard
          heading="Service Three"
          image={ServiceImages.serviceImg3}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
          onCllick={() => {}}
        />
        <ServiceComponents.ServiceCard
          isEven
          heading="Service Four"
          image={ServiceImages.serviceImg4}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
          onCllick={() => {}}
        />
      </div>
    </section>
  );
};

export default ServiceListSection;
