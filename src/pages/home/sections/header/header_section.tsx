import "./header_section.css";
import HeaderComponenet from "../../components/index";
import HomeIcons from "../../../../assets/icons/home/index";
import SharedComponenet from "../../../../shared/components/index";

const HeaderSection = () => {
  return (
    <section id="header">
      <div className="header-info">
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
              <HeaderComponenet.NumberContainer
                num="147"
                text="Completed Projects"
              />
            </div>
            <div className="primary-color">
              <HeaderComponenet.NumberContainer
                num="25+"
                text="Years of Expirience"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="header-service-info">
          <div className="service-info">
            <h2>We Construct and Manage Places and Infrastructures</h2>
            <ul>
              <li>
                <SharedComponenet.ServiceInfoContainer
                  image={HomeIcons.homeService1}
                  title="General Contract"
                  subtitle="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum"
                />
              </li>
              <li>
                <SharedComponenet.ServiceInfoContainer
                  image={HomeIcons.homeService2}
                  title="General Contract"
                  subtitle="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum"
                />
              </li>
              <li>
                <SharedComponenet.ServiceInfoContainer
                  image={HomeIcons.homeService3}
                  title="General Contract"
                  subtitle="Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
