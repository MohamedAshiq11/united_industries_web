import "./about_us_quote_card.css";

interface Props {
  number: number;
  title: string;
  subtitle: string;
}

const AboutUsQuoteCard = (props: Props) => {
  return (
    <div className="about-us-quote-card">
      <div className="content-container">
        <div className="number">{props.number.toString().padStart(2, "0")}</div>
        <div className="content">
          <div className="title">{props.title}</div>
          <div className="subtitle">{props.subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsQuoteCard;
