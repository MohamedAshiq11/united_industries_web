import "./service_info_card.css";

interface Props {
  image: string;
  title: string;
  subtitle: string;
}

const ServiceInfoCard = (props: Props) => {
  return (
    <div className="service-info-card">
      <img src={props.image} alt="" />
      <div className="service-details">
        <div className="service-title">{props.title}</div>
        <div className="service-subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
