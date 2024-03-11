import "./service_section.css";
import ServiceComponenet from "../../components/index";
import homeImage from "../../../../assets/images/home/index";

const ServiceSection = () => {
  return (
    <section id="home-service">
      <div className="content-container">
        <img src={homeImage.serviceImg1} alt="" className="service-img-1" />
        <ServiceComponenet.ServiceInfoContainer
          title="Research & Analysis"
          image={homeImage.serviceImg2}
          subtitle="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
        />
        <ServiceComponenet.ServiceInfoContainer
          title="Industry Development"
          image={homeImage.serviceImg3}
          isEven={true}
          subtitle="Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat"
        />
        <ServiceComponenet.ServiceInfoContainer
          title="Production Launch"
          image={homeImage.serviceImg4}
          subtitle="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
