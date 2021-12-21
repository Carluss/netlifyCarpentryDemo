import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import history from "../../history";

const ModalLightBox = React.memo((props) => {
  const { port, alt_description } = props.image;
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    return () => {
      if (
        (window.location.pathname === "/portfolio" ||
          window.location.pathname === "/projetos") &&
        window.location.hash === "#/"
      ) {
        props.handleIsOpen();
        history.goBack();
      }
    };
  }, [props]);

  return (
    <Lightbox
      onClick={(event) => event.stopPropagation()}
      mainSrc={port[photoIndex]}
      nextSrc={port[photoIndex + 1 >= port.length ? null : photoIndex + 1]}
      prevSrc={port[photoIndex - 1 < 0 ? null : photoIndex - 1]}
      onCloseRequest={() => props.handleIsOpen()}
      imageTitle={alt_description[photoIndex]}
      onMovePrevRequest={() =>
        setPhotoIndex((photoIndex + port.length - 1) % port.length)
      }
      onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % port.length)}
    />
  );
});

export default ModalLightBox;
