import "./section-title.css";

interface Props {
  text: string;
}

const SectionTitle = (props: Props) => {
  return <div className="section-title">{props.text}</div>;
};

export default SectionTitle;
