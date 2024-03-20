import Sections from "./sections/index";
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const location = useLocation();

  let paramsData = location.state;

  return (
    <section id="service-details">
      {/* Service Details Section: Header Section */}
      <Sections.ServiceDetailsHeaderSection title={paramsData.title} />

      {/* Service Details Section: Service Info Section */}
      <Sections.ServiceDetailsInfoSection />
    </section>
  );
};

export default ServiceDetails;
