import React from "react";
import { connect } from "react-redux";
import { scrollContacts, mapVisible } from "../../actions";

import QuemSomos from "./QuemSomos";
import ContactsPage from "./contactPage/ContactsPage";
import Servicos from "./servico/Servicos";
import RollImg from "./RollImg";
import "./content.css";

class Home extends React.Component {
  mapRef = React.createRef(0);
  componentDidMount() {
    if (this.props.scrollEvent) {
      setTimeout(function () {
        document.getElementById("contactss").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);

      this.props.scrollContacts();
    }
  }
  componentDidUpdate() {
    if (this.props.scrollEvent) {
      document.getElementById("contactss").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      this.props.scrollContacts();
    }

    if (
      this.mapRef.current.getBoundingClientRect().top + window.scrollY <=
        1100 &&
      this.props.mapIsVisible === false
    ) {
      this.props.mapVisible();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Servicos
          width={this.props.calculations.width}
          pixelsPassed={this.props.calculations.pixelsPassed}
        />
        <RollImg />
        <QuemSomos />
        <ContactsPage
          width={this.props.calculations.width}
          innerRef={this.mapRef}
          visible={this.props.mapIsVisible}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scrollEvent: state.path.scrollContacts,
    servViewd: state.path.servicos_viewed,
    mapIsVisible: state.path.mapVisible,
  };
};

export default connect(mapStateToProps, { scrollContacts, mapVisible })(Home);
