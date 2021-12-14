import React from "react";
import "./portfolio.css";
import Titles from "../../util/Titles";
import ImageCard from "../../util/ImageCard";
import Pbuttons from "./Pbuttons";

const Portfolio = (props) => {
  function renderedImageList() {
    return props.images.map((image, i) => {
      return <ImageCard card={props.card} key={i} image={image} />;
    });
  }

  return (
    <div className="ui container">
      <Titles title={props.title} />
      <Pbuttons />
      <div className=" image-list">{renderedImageList()}</div>
    </div>
  );
};

export default Portfolio;
