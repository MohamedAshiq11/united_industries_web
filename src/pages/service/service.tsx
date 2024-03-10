import Sections from "./sections/index";

const Service = () => {
  return (
    <section id="service">
      {/* Service Section: Header Section */}
      <Sections.ServiceHeaderSection />

      {/* Service Section: Service List Section */}
      <Sections.ServiceListSection />
    </section>
  );
};

export default Service;
