import React, { useEffect } from "react";
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

const Home = (props) => {
  useEffect(() => {
    if (props.scrollEvent) {
      setTimeout(function () {
        document.getElementById("contactss").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);

      props.scrollContacts();
    }
  }, [props]);

  return (
    <React.Fragment>
      <Servicos
        width={props.calculations.width}
        servViewd={props.servViewd}
        servicosViewed={props.servicosViewed}
      />
      <RollImg
        changePath={props.changePath}
        changePathFilter={props.changePathFilter}
      />
      <QuemSomos />
      <ContactsPage
        width={props.calculations.width}
        mapVisible={props.mapVisible}
        isMapVisible={props.mapIsVisible}
      />
    </React.Fragment>
  );
};

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
