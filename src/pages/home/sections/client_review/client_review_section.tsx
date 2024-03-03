import "swiper/css";
import "./client_review_section.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientComponent from "../../components/index";
import SharedComponenet from "../../../../shared/components/index";

const ClientReviewSection = () => {
  return (
    <section id="client-review">
      <div className="wrapper">
        <div className="content-container">
          <SharedComponenet.AboutSectionTitle text="Testimonials" />
          <SharedComponenet.SectionTitle text="Our Clients Say" />
          <div className="client-review-info">
            <Swiper
              loop={true}
              autoplay={true}
              spaceBetween={50}
              slidesPerView={1}
              className="client-review-swiper"
              onSlideChange={(swiper) =>
                console.log(`Swiper Service 2: ${swiper.activeIndex}`)
              }
            >
              <SwiperSlide>
                <ClientComponent.ClientReviewCard />
              </SwiperSlide>
              <SwiperSlide>
                <ClientComponent.ClientReviewCard />
              </SwiperSlide>
              <SwiperSlide>
                <ClientComponent.ClientReviewCard />
              </SwiperSlide>
            </Swiper>
            <div className="home-slider-indicator-postion">
              {/* {[1, 2, 3].map((index) => ( */}
                <span className="home-slider-indicator"></span>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewSection;
