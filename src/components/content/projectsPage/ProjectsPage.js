import React from "react";

import ImageCard from "../../util/ImageCard";
import Titles from "../../util/Titles";

const ProjectsPage = (props) => {
  function renderedImageList() {
    return props.images.map((image, i) => {
      return <ImageCard card={true} key={i} image={image} />;
    });
  }

  return (
    <div className="ui container">
      <Titles title={props.title} />
      <div className=" image-list">{renderedImageList()}</div>
    </div>
  );
};

export default ProjectsPage;
