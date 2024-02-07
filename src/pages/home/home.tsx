import "./home.css";
import Componenet from "./sections/index";

const Home = () => {
  return (
    <section id="home">
      {/* Home Section: Header Section */}
      <Componenet.HeaderSection />

      {/* Home Section: About Us Section */}
      <Componenet.AboutUs />
    </section>
  );
};

export default Home;
