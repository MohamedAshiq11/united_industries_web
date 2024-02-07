import "./custom_button.css";
import globalIcons from "../../../assets/icons/global/index";

interface Props {
  text?: string;
  onClick: () => void;
}

const CustomButton = (props: Props) => {
  return (
    <div className="custom-button">
      <div className="text">{props.text ?? "Learn more"}</div>
      <img src={globalIcons.whiteArrowRight} alt="" />
    </div>
  );
};

export default CustomButton;
