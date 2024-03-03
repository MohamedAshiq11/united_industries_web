import "./small-container.css";

interface Props {
  image: string;
  className?: string | null;
}

const SmallContainer = (props: Props) => {
  return (
    <div
      className={`small-container ${
        props.className == null ? "" : props.className
      }`}
    >
      <img src={props.image} alt="" />
    </div>
  );
};

export default SmallContainer;
