import "./service_card.css";
import globalIcons from "../../../../assets/icons/global/index";

interface Props {
  image: string;
  heading: string;
  isEven?: boolean;
  description: string;
  onCllick: () => void;
}

const ServiceCard = (props: Props) => {
  return (
    <section id="service-card">
      <div className={`content-container ${props.isEven ? "row-reverse" : ""}`}>
        <img src={props.image} alt="" />
        <div className="service-info">
          <div className="heading">{props.heading}</div>
          <div className="description">{props.description}</div>
          <div className="service-btn" onClick={props.onCllick}>
            Learn more
            <img src={globalIcons.whiteArrowRight} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
