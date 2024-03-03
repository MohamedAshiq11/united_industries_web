import "./home_map_section.css";
import SharedComponenet from "../../../../shared/components/index";

const HomeMapSection = () => {
  return (
    <section id="home-map">
      <div className="home-google-map">
        <SharedComponenet.GoogleMap />
      </div>
    </section>
  );
};

export default HomeMapSection;
