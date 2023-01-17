import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";
import { View } from "../typescript/interfaces";
import { MapProps, Location } from "../typescript/types";

function Map({ searchResults }: MapProps) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates) as Location;

  const [viewport, setViewport] = useState<View>({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/devnilson/clczey9nj000s14nwoawtgygs"
      mapboxAccessToken={process.env.MAPBOX_KEY}
      onMove={(evt) => setViewport(evt.viewState)}
      {...viewport}
    ></ReactMapGL>
  );
}

export default Map;
