import "./custom_sm_info_card.css";

interface Props {
  label: string;
  text: string;
}

const CustomSmInfoCard = (props: Props) => {
  return (
    <div className="custom-sm-info-card">
      <div className="label">{props.label}</div>
      <div className="text">{props.text}</div>
    </div>
  );
};

export default CustomSmInfoCard;
