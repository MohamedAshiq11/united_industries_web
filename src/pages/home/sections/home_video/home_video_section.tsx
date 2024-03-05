import "./home_video_section.css";
import homeVideoTrailer from "../../../../assets/videos/home/welding-video.mp4";

const HomeVideoSection = () => {
  return (
    <section id="home-video">
      <div className="home-video-player">
        <video autoPlay loop muted>
          <source src={homeVideoTrailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
