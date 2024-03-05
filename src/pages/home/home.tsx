import "./home.css";
import Componenet from "./sections/index";

const Home = () => {
  return (
    <section id="home">
      {/* Home Section: Header Section */}
      <Componenet.HeaderSection />

      {/* Home Section: About Us Section */}
      <Componenet.AboutUsSection />

      {/* Home Section: Service Section */}
      <Componenet.ServiceSection />

      {/* Home Section: Our Projects Section */}
      <Componenet.OurProjectsSection />

      {/* Home Section: Map Section */}
      <Componenet.HomeMapSection />

      {/* Home Section: Client Review Section */}
      <Componenet.ClientReviewSection />

      {/* Home Section: Video Section */}
      <Componenet.HomeVideoSection />
    </section>
  );
};

export default Home;
