import "./home_map_contact_card.css";

interface Props {
  image: string;
  label: string;
  text1: string;
  text2: string;
  bgColor?: string;
}

const HomeMapContactCard = (props: Props) => {
  return (
    <div className="home-map-contact-card">
      <img
        src={props.image}
        alt=""
        className={props.bgColor == null ? "" : props.bgColor}
      />
      <div className="contact-info">
        <div className="label">{props.label}</div>
        <div className="text">{props.text1}</div>
        <div className="text">{props.text2}</div>
      </div>
    </div>
  );
};

export default HomeMapContactCard;
