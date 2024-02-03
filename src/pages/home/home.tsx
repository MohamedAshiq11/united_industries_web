import "./home.css";
import NumberContainer from "./components/number_container";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="header">
          <div className="wrapper">
            <div className="title">
              Construction solution <br />
              <span>for everyone</span>
            </div>
            <div className="subtitle">
              In id enim odio. Nunc aliquet diam tortor, at venenatis urna
              sagittis non. Suspendisse sodales nulla <br />
              sit amet sem condimentum, ac euismod nibh elementum. Praesent eu
              urna at sem sodales <br />
              venenatis. Mauris efficitur dapibus enim in posuere
            </div>
            <div className="content-container">
              <div className="secondary-color">
                <NumberContainer num="147" text="Completed Projects"/>
              </div>
              <div className="primary-color">
                <NumberContainer num="25+" text="Years of Expirience"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us">section</section>
    </>
  );
};

export default Home;
