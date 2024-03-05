import "./google_map.css";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7835.217480156757!2d76.03580829155449!3d10.917310691656201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b67d30ba208b%3A0x2c6a8abd3333a4b7!2sKanchippura%2C%20Kerala%20676552%2C%20India!5e0!3m2!1sen!2sae!4v1709670813652!5m2!1sen!2sae"
      width="600"
      height="450"
      loading="lazy"
      className="home-google-map"
    ></iframe>
  );
};

export default GoogleMap;
