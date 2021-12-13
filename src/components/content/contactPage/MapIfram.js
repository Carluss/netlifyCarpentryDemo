import React from "react";
import ButtonDirections from "./ButtonDirections";
import L from "leaflet";

import "leaflet/dist/leaflet";

import {
  MOBILE_WIDTH,
  MAP_CENTER,
  MAP_ZOOM,
  POINT_INTEREST,
} from "../../util/Const";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

var myIcon = L.icon({
  iconUrl: "/util/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [15, 36],
  popupAnchor: [0, -36],
});

const MapIframe = (props) => {
  return (
    <MapContainer
      className="map"
      center={props.width > MOBILE_WIDTH ? MAP_CENTER : POINT_INTEREST}
      zoom={MAP_ZOOM}
      scrollWheelZoom={false}
      dragging={props.width > MOBILE_WIDTH ? true : false}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <Marker position={POINT_INTEREST} icon={myIcon}>
        <Popup>
          <ButtonDirections />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapIframe;
