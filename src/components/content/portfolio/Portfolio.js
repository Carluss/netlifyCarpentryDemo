import React from "react";
import { connect } from "react-redux";
import { filterApplied } from "../../../actions";

import "./portfolio.css";
import Titles from "../../util/Titles";
import ImageCard from "../../util/ImageCard";
import Pbuttons from "./Pbuttons";

const Portfolio = (props) => {
  function renderedImageList() {
    return props.images.map((image, i) => {
      return (
        <ImageCard
          card={props.card}
          key={i}
          image={image}
          filter={props.filter}
          filterApplied={props.filterApplied}
        />
      );
    });
  }

  return (
    <div className="ui container">
      <Titles title={props.title} />
      <Pbuttons filter={props.filter} filterApplied={props.filterApplied} />
      <div className=" image-list">{renderedImageList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.path.filter };
};

export default connect(mapStateToProps, { filterApplied })(Portfolio);
