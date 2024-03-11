import "./service_list_section.css";

import { useNavigate } from "react-router-dom";
import ServiceComponents from "../../components/index";
import ServiceImages from "../../../../assets/images/service/index";

const ServiceListSection = () => {
  const navigate = useNavigate();

  const handleClick = (title: String) => {
    navigate("/service-details", {
      state: {
        title: title,
      },
    });
  };

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
          onCllick={() => {
            handleClick("Service One");
          }}
        />
        <ServiceComponents.ServiceCard
          isEven
          heading="Service Two"
          image={ServiceImages.serviceImg2}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
          onCllick={() => {
            handleClick("Service Two");
          }}
        />
        <ServiceComponents.ServiceCard
          heading="Service Three"
          image={ServiceImages.serviceImg3}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
          onCllick={() => {
            handleClick("Service Three");
          }}
        />
        <ServiceComponents.ServiceCard
          isEven
          heading="Service Four"
          image={ServiceImages.serviceImg4}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book."
          onCllick={() => {
            handleClick("Service Four");
          }}
        />
      </div>
    </section>
  );
};

export default ServiceListSection;
