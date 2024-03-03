import "./google_map.css";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.9302,
      lng: 76.0247,
    },
    zoom: 14,
  };

  return (
    // Important! Always set the container height explicitly
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyBw23FMGxQEtXI1-FvziI_nsSE-mH3dMxs",
      }}
      defaultZoom={defaultProps.zoom}
      defaultCenter={defaultProps.center}
    >
      {/* <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            /> */}
      <div>"My Marker"</div>
    </GoogleMapReact>
  );
};

export default GoogleMap;
