import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  // debugger;
  const [selectedLocation, setSelectedLocation] = useState({});
  //transform searchResults to an object with this schema in order to use geolib
  const coordinates = searchResults.map(({ lat, long }) => ({
    latitude: lat,
    longitude: long,
  }));
  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  console.log(selectedLocation);
  return (
    <ReactMapGL
      {...viewPort}
      //pass the values with spread operator
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.mapbox_key}
      // onViewportChange={(viewPort) => setViewPort(viewPort)}
      onMove={(e) => setViewPort(e.viewPort)}
    >
      {searchResults.map((res) => (
        <div key={res.long}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
            role="img"
              onClick={() => setSelectedLocation(res)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* {popup shown if we it's clicked on a Marker} */}
          {selectedLocation.long === res.long ? (
            <Popup
            closeOnClick={true}
            latitude={res.lat}
            longitude={res.long}
            onClose={() => setSelectedLocation({})}
            >
              {res.title}
            </Popup>
          ) : (
            false
            )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
