import React from "react";
import { connect } from "react-redux";
import {
  scrollContacts,
  mapVisible,
  servicosViewed,
  changePath,
  changePathFilter,
} from "../../actions";

import QuemSomos from "./QuemSomos";
import Servicos from "./servico/Servicos";
import RollImg from "./RollImg";
import "./content.css";
import ContactsPage from "./contactPage/ContactsPage";

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
  }

  render() {
    return (
      <React.Fragment>
        <Servicos
          width={this.props.calculations.width}
          servViewd={this.props.servViewd}
          servicosViewed={this.props.servicosViewed}
        />
        <RollImg
          changePath={this.props.changePath}
          changePathFilter={this.props.changePathFilter}
        />
        <QuemSomos />
        <ContactsPage
          width={this.props.calculations.width}
          mapVisible={this.props.mapVisible}
          isMapVisible={this.props.mapIsVisible}
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

export default connect(mapStateToProps, {
  scrollContacts,
  mapVisible,
  servicosViewed,
  changePath,
  changePathFilter,
})(Home);
