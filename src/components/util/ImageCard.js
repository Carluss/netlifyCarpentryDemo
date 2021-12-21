import React, { lazy, Suspense } from "react";
import { Transition, Dimmer, Loader } from "semantic-ui-react";
import history from "../../history";

import { ResponsiveImageThumbnail } from "./ResponsiveImage";

const ModalLightBox = lazy(() => import("./ModalLightBox"));

class ImageCard extends React.PureComponent {
  state = {
    spans: 0,
    isOpen: false,
    visible: true,
    dimmer: true,
  };
  imageRef = React.createRef();

  componentDidMount() {
    if (this.imageRef.current) {
      this.imageRef.current.addEventListener("load", this.setSpans);
    }
    this.unlisten = history.listen((location, action) => {
      if (
        (location.pathname === "/portfolio" ||
          location.pathname === "/projetos") &&
        location.hash === "" &&
        action === "POP"
      ) {
        this.handleIsOpen();
      }
      // console.log("on route change loc", location, " acto.: ", action);
    });
  }
  componentWillUnmount() {
    if (this.imageRef.current) {
      this.imageRef.current.removeEventListener("load", this.setSpans);
    }
    this.unlisten();
  }

  setSpans = () => {
    if (this.imageRef.current !== null) {
      const height = this.imageRef.current.clientHeight;

      const spans = Math.ceil(height / 20) + 2;

      //console.log(this.imageRef.current.clientHeight + "- " + spans);
      this.setState({ spans });
    }
  };

  changeIsOpen = () => {
    this.setState({ isOpen: false });
  };

  handleIsOpen = (e) => {
    if (e !== undefined) {
      history.goBack();
    }
    this.setState({
      dimmer: false,
      isOpen: false,
    });
    this.setState({
      dimmer: true,
    });
  };

  render() {
    //console.log("Inside Image Card", this.props.filter);

    const { alt_description, cat, port, thumbnail } = this.props.image;
    const { spans } = this.state;
    const imageStyle = spans === 0 ? { visibility: "hidden" } : {};
    return (
      <>
        <Transition
          directional={true}
          onHide={() => this.setState({ spans: "0" })}
          onShow={() => this.setSpans()}
          visible={
            this.props.filter === "Tudo" ||
            cat.includes(this.props.filter) ||
            this.props.card
              ? true
              : false
          }
          animation="horizontal flip"
          duration={500}
        >
          <div
            className={`filter ${cat}`}
            ref={this.props.innerRef}
            style={{
              gridRowEnd: `span ${this.state.spans}`,
              position: "relative",
            }}
          >
            <div className="ui card">
              <a
                href="#/"
                onClick={() => {
                  this.setState({ isOpen: true });
                }}
              >
                <div className="ui fluid image" style={{ cursor: "pointer" }}>
                  {port.length > 1 ? (
                    <div className="ui left corner label">
                      <i className="images icon"></i>
                    </div>
                  ) : null}
                  <ResponsiveImageThumbnail
                    image={thumbnail}
                    styleI={imageStyle}
                    innerRef={this.imageRef}
                    alt={alt_description}
                    classNameI="small image"
                  />
                </div>
              </a>
              {!this.props.card ? (
                <div
                  className="ui bottom left attached label spanCat-lable"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <RenderCategorys
                    cat={cat}
                    filterApplied={this.props.filterApplied}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </Transition>

        {this.state.isOpen ? (
          <Suspense
            fallback={
              <Dimmer
                active={this.state.dimmer}
                onClick={(e) => this.handleIsOpen(e)}
              >
                <Loader />
              </Dimmer>
            }
          >
            <ModalLightBox
              image={this.props.image}
              handleIsOpen={this.handleIsOpen.bind(this)}
            />
          </Suspense>
        ) : null}
      </>
    );
  }
}

const RenderCategorys = React.memo(({ cat, filterApplied }) => {
  return cat.split(" ").map((word, index) => {
    const temp = word.charAt(0).toUpperCase() + word.slice(1);
    if (index === cat.split(" ").length - 1) {
      return (
        <React.Fragment key={temp}>
          <span className="spanCat" onClick={(e) => filterApplied(temp)}>
            {temp}
          </span>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={temp}>
          <span className="spanCat" onClick={(e) => filterApplied(temp)}>
            {temp}
          </span>
          {" / "}
        </React.Fragment>
      );
    }
  });
});

export default ImageCard;
