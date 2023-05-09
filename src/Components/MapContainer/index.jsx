import React from "react";
import GoogleMapReact from "google-map-react";
import { HeartOutlined } from "@ant-design/icons";

const AnyReactComponent = ({ text }) => (
  <div>{<HeartOutlined style={{ fontSize: "24px", color:"red"}} />}</div>
);

export default function MapContainer({markers, onMapClick}) {
  const defaultProps = {
    center: markers.length && markers[0] ?{
      lat: markers[0].placeLat,
      lng: markers[0].placeLng,
    }:{
      lat: 7.357410170665996,
      lng: 81.79616678145096,
    },
    zoom: 13,
  };

  

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDw0Y_hRmTmWP9c6yQaRpGbyI8A5mANJv4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(e) => onMapClick && onMapClick(e)}
      >
        {markers.map((marker,index) => (
          <AnyReactComponent
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            // text="My Location"
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
