import React from "react";

import ImageCard from "../../util/ImageCard";
import Titles from "../../util/Titles";

const images = [
  {
    id: "1",
    alt_description: ["1", "2"],
    port: [
      "/images/projects/pj1-1.jpg",
      "/images/projects/pj1-2.jpg",
      "/images/projects/pj1-3.jpg",
      "/images/projects/pj1-4.jpg",
      "/images/projects/pj1-5.jpg",
      "/images/projects/pj1-6.jpg",
    ],
    cat: "Cozinhas",
    desc: "qwerty1",
  },
];

const ProjectsPage = (props) => {
  function renderedImageList() {
    return images.map((image, i) => {
      return <ImageCard card={true} key={i} image={image} />;
    });
  }

  return (
    <div className="ui container">
      <Titles title="Projetos" />
      <div className=" image-list">{renderedImageList()}</div>
    </div>
  );
};

export default ProjectsPage;
