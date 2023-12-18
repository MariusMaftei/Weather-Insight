import React, { useEffect, useState } from "react";
import classes from "./CityMap.module.css";
import GoogleMapReact from "google-map-react";

export default function SimpleMap(props) {
  const { lat, lng } = props;

  const [center, setCenter] = useState({
    lat: parseFloat(lat) || 45.4408,
    lng: parseFloat(lng) || 12.3155,
  });

  const [zoom, setZoom] = useState(
    parseFloat(lat) === 0 && parseFloat(lng) === 0 ? 5 : 12
  );

  const defaultProps = {
    center,
    zoom,
  };

  useEffect(() => {
    setCenter({
      lat: parseFloat(lat) || 45.4408,
      lng: parseFloat(lng) || 12.3155,
    });

    if (
      Math.abs(parseFloat(lat)) < 0.000001 &&
      Math.abs(parseFloat(lng)) < 0.000001
    ) {
      setZoom(5);
    } else {
      setZoom(12);
    }
  }, [lat, lng]);
  return (
    <div className={classes.map}>
      <GoogleMapReact
        key={`${center.lat}-${center.lng}`}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
