import "./common_header.css";
import sharedComponents from "../../../shared/components/index";

interface Props {
  image: string;
  title: string;
  showContactCard?: boolean;
}

const CommonHeader = (props: Props) => {
  return (
    <section
      id="common-header"
      style={{ height: props.showContactCard ? "57vh" : "45vh" }}
    >
      <div
        className="common-header-image"
        style={{ background: `url(${props.image})`, backgroundSize: "cover" }}
      ></div>
      <div className="wrapper common-header-title">
        <div className="title">{props.title}</div>
      </div>
      {props.showContactCard && (
        <div className="wrapper common-header-contact-card">
          <sharedComponents.CustomSmInfoCard
            label="Call Us Today"
            text="+1 123 4567 789"
          />
        </div>
      )}
    </section>
  );
};

export default CommonHeader;
