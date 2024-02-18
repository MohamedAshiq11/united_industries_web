import "./small-container.css";

interface Props {
  image: string;
}

const SmallContainer = (props: Props) => {
  return (
    <div className="small-container">
      <img src={props.image} alt="" />
    </div>
  );
};

export default SmallContainer;
