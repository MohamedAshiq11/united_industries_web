import "./client_review_card.css";
import homeImage from "../../../../assets/images/home/index";
import globalIcon from "../../../../assets/icons/global/index";
import SharedComponenet from "../../../../shared/components/index";

const ClientReviewCard = () => {
  return (
    <div className="client-review-card">
      <img src={homeImage.clientImg} alt="" className="client-image" />
      <div className="client-review-info">
        <SharedComponenet.SmallContainer image={globalIcon.whiteQuoteRight} />
        <div className="review-text">
          Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae
          massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque
          erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant
          morbi tristique
        </div>
        <div className="client-name">Katy Grey</div>
        <div className="client-designation">CEO Grey Industries</div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
