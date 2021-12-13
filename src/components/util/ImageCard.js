import React from "react";
import { connect } from "react-redux";
import { Transition } from "semantic-ui-react";

import { filterApplied } from "../../actions";

import ModalLightBox from "./ModalLightBox";

class ImageCard extends React.Component {
  state = { spans: 0, isOpen: false, visible: true };
  imageRef = React.createRef();

  componentDidMount() {
    if (this.imageRef.current) {
      this.imageRef.current.addEventListener("load", this.setSpans);
    }
  }
  componentWillUnmount() {
    if (this.imageRef.current) {
      this.imageRef.current.removeEventListener("load", this.setSpans);
    }
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

  renderCategorys(cat) {
    return cat.split(" ").map((word, index) => {
      const temp = word.charAt(0).toUpperCase() + word.slice(1);
      if (index === cat.split(" ").length - 1) {
        return (
          <React.Fragment key={temp}>
            <span
              className="spanCat"
              onClick={(e) => this.props.filterApplied(temp)}
            >
              {temp}
            </span>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={temp}>
            <span
              className="spanCat"
              onClick={(e) => this.props.filterApplied(temp)}
            >
              {temp}
            </span>
            {" / "}
          </React.Fragment>
        );
      }
    });
  }

  handleIsOpen = () => {
    this.setState({ isOpen: false });
  };

  render() {
    //console.log("Inside Image Card", this.props.filter);

    const { alt_description, cat, port } = this.props.image;
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

                  <img
                    className="small image"
                    ref={this.imageRef}
                    alt={alt_description}
                    src={port[0]}
                  />
                </div>
              </a>
              {!this.props.card ? (
                <div
                  className="ui bottom left attached label spanCat-lable"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {this.renderCategorys(cat)}
                </div>
              ) : null}
            </div>
          </div>
        </Transition>
        {this.state.isOpen ? (
          <ModalLightBox
            image={this.props.image}
            handleIsOpen={this.handleIsOpen}
          />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { filter: state.path.filter };
};

export default connect(mapStateToProps, { filterApplied })(ImageCard);
