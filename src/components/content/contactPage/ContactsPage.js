import React, { useRef } from "react";

import Titles from "../../util/Titles";
import "../content.css";
import MapIframe from "./MapIfram";
import Info from "./Info";
import { MOBILE_WIDTH } from "../../util/Const";

const Contacts = (props) => {
  const renders = useRef(0);
  return (
    <>
      <div>{renders.current++}</div>
      <Titles order={false} title="CONTACTOS" subtitle="A NOSSA LOCALIZAÇÂO" />
      <div ref={props.innerRef} className="ui container">
        {props.width <= MOBILE_WIDTH ? <Info info={false} /> : null}
        <div key="MAP" ref={props.innerRef} className="map-container">
          {props.visible ? (
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
};

export default React.memo(Contacts);
