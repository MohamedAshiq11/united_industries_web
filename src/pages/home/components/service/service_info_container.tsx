import "./service_info_container.css";
import globalIcon from "../../../../assets/icons/global/index";
import SharedComponenet from "../../../../shared/components/index";

interface Props {
  image: string;
  title: string;
  isEven?: boolean;
  subtitle: string;
}

const ServiceInfoContainer = (props: Props) => {
  console.log(props.isEven);
  return (
    <div className="service-info-container">
      <div className={`overlay ${props.isEven ? "primary-color" : ""}`}></div>
      <img src={props.image} alt="" />
      <div className="content-container">
        <div className="content">
          <div className="title">{props.title}</div>
          <div className="subtitle">{props.subtitle}</div>
        </div>
        <SharedComponenet.SmallContainer image={globalIcon.play} />
      </div>
    </div>
  );
};

export default ServiceInfoContainer;
