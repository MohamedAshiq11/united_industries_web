import "../../sections/header/header_section.css";

interface Props {
  num: string;
  text: string;
}

const NumberContainer = (props: Props) => {
  return (
    <div className="number-container">
      <div className="value">
        <div className="num">{props.num}</div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default NumberContainer;
