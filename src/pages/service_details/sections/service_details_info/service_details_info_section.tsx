import "./service_details_info_section.css";
import serviceImages from "../../../../assets/images/service/index";

const ServiceDetailsInfoSection = () => {
  return (
    <section id="service-details-info">
      <div className="wrapper">
        <div className="content-container">
          <div className="full-description">
            <img
              src={serviceImages.serviceDetailsImg1}
              alt=""
              className="main-img"
            />
            <div className="text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
            <div className="text">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </div>
            <div className="small-img">
              <img src={serviceImages.serviceDetailsImg2} alt="" />
              <img src={serviceImages.serviceDetailsImg3} alt="" />
              <img src={serviceImages.serviceDetailsImg4} alt="" />
              <img src={serviceImages.serviceDetailsImg5} alt="" />
            </div>
          </div>
          <div className="short-description">
            <div className="heading">London Palace</div>
            <div className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div className="project-info-heading">
              Project <span>Info</span>
            </div>
            <div className="project-info-content">
              Client: <span>John Doe</span>
            </div>
            <div className="project-info-content">
              Category: <span>Construction Business</span>
            </div>
            <div className="project-info-content">
              Completed on: <span>20 January 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsInfoSection;
