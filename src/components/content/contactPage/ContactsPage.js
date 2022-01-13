import React, { useEffect } from "react";
import { Container, Segment } from "semantic-ui-react";

import Titles from "../../util/Titles";
import MapIframe from "./MapIfram";
import Info from "./Info";
import { MOBILE_WIDTH } from "../../util/Const";
import { useInView } from "react-intersection-observer";

const Contacts = React.memo((props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  useEffect(() => {
    if (inView && props.isMapVisible === false) {
      props.mapVisible();
    }
  }, [props, inView]);

  return (
    <>
      <Titles order={false} title="CONTACTOS" subtitle="A NOSSA LOCALIZAÇÂO" />
      <div ref={props.innerRef}></div>
      <Container>
        {props.width <= MOBILE_WIDTH ? <Info info={false} /> : null}
        <div
          key="MAP"
          ref={ref}
          data-testid="mapItem"
          className="map-container"
        >
          {props.isMapVisible ? (
            <MapIframe width={props.width} />
          ) : (
            <div className="map"></div>
          )}
          {props.width > MOBILE_WIDTH ? (
            <Segment className="overlay-form">
              <Info info={true} />
            </Segment>
          ) : null}
        </div>
      </Container>
    </>
  );
});

export default Contacts;
