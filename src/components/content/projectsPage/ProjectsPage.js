import React from "react";
import { Container } from "semantic-ui-react";

import ImageCard from "../../util/ImageCard";
import Titles from "../../util/Titles";

const ProjectsPage = React.memo((props) => {
  function renderedImageList() {
    return props.images.map((image, i) => {
      return <ImageCard card={true} key={i} image={image} />;
    });
  }

  return (
    <Container>
      <Titles title={props.title} />
      <div className=" image-list">{renderedImageList()}</div>
    </Container>
  );
});

export default ProjectsPage;
