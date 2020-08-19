import React from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import MapComponent from "./MapComponent";

const Map = () => {
  const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

  return (
    <div className="Map" style={{ height: "100vh" }}>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDgzZl6nElKEn823T6FSnU-CKf-vxtMKF4&libraries=places"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};
export default Map;
