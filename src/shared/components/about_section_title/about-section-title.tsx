import "./about-section-title.css";

interface Props {
  text: string;
}

const AboutSectionTitle = (props: Props) => {
  return <div className="about-section-title">{props.text}</div>;
};

export default AboutSectionTitle;
