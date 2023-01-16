import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    with: "100%",
    height: "100%",
    latitude: 37.55,
    longitude: -122.43,
    zoom: 10,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/devnilson/clczey9nj000s14nwoawtgygs"
      mapboxAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
    ></ReactMapGL>
  );
}

export default Map;
