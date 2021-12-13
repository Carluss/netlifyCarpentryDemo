import React from "react";
import Lightbox from "react-image-lightbox";
import history from "../../history";

class ModalLightBox extends React.Component {
  state = { photoIndex: 0 };

  componentDidMount() {
    this.unlisten = history.listen((location, action) => {
      if (
        (location.pathname === "/portfolio" ||
          location.pathname === "/projetos") &&
        location.hash === "" &&
        action === "POP"
      ) {
        this.props.handleIsOpen();
      }
      // console.log("on route change loc", location, " acto.: ", action);
    });
  }

  componentWillUnmount() {
    //console.log("TH", window.location);

    if (
      (window.location.pathname === "/portfolio" ||
        window.location.pathname === "/projetos") &&
      window.location.hash === "#/"
    ) {
      this.props.handleIsOpen();
      history.goBack();
    }
    this.unlisten();
  }

  render() {
    const { port, alt_description } = this.props.image;

    return (
      <Lightbox
        onClick={(event) => event.stopPropagation()}
        mainSrc={port[this.state.photoIndex]}
        nextSrc={
          port[
            this.state.photoIndex + 1 >= port.length
              ? null
              : this.state.photoIndex + 1
          ]
        }
        prevSrc={
          port[this.state.photoIndex - 1 < 0 ? null : this.state.photoIndex - 1]
        }
        onCloseRequest={() => {
          this.props.handleIsOpen();
        }}
        imageTitle={alt_description[this.state.photoIndex]}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (this.state.photoIndex + port.length - 1) % port.length,
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (this.state.photoIndex + 1) % port.length,
          })
        }
      />
    );
  }
}

export default ModalLightBox;
