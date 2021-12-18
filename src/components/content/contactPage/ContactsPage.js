import React from "react";

import Titles from "../../util/Titles";
import "../content.css";
import MapIframe from "./MapIfram";
import Info from "./Info";
import { MOBILE_WIDTH } from "../../util/Const";
import useOnScreen from "../../util/useOnScreen";

const Contacts = React.memo((props) => {
  const [mapRef, isVisible] = useOnScreen("300px", 0.6, props.isMapVisible);

  if (isVisible && props.isMapVisible === false) {
    setTimeout(function () {
      props.mapVisible();
    }, 50);
  }

  return (
    <>
      <Titles order={false} title="CONTACTOS" subtitle="A NOSSA LOCALIZAÇÂO" />
      <div ref={props.innerRef} className="ui container">
        {props.width <= MOBILE_WIDTH ? <Info info={false} /> : null}
        <div key="MAP" ref={mapRef} className="map-container">
          {props.isMapVisible ? (
            <MapIframe width={props.width} />
          ) : (
            <div className="map"></div>
          )}

          {props.width > MOBILE_WIDTH ? (
            <div className="ui segment overlay-form">
              <Info info={true} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
});

export default Contacts;
