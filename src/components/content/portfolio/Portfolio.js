import React from "react";
import "./portfolio.css";
import Titles from "../../util/Titles";
import ImageCard from "../../util/ImageCard";
import Pbuttons from "./Pbuttons";

const images = [
  {
    id: "1",
    alt_description: ["1", "2"],
    cat: "Mesas Mobiliário",
    port: ["/images/p1-1.jpg", "/images/p1-2.jpg"],
  },
  {
    id: "2",
    alt_description: ["1", "2"],
    cat: "Cozinhas",
    port: ["/images/p2-1.jpg", "/images/p2-2.jpg"],
  },
  {
    id: "4",
    alt_description: ["1", "2", "3"],
    cat: "Mobiliário",
    port: ["/images/p4-1.jpg", "/images/p4-2.jpg", "/images/p4-3.jpg"],
  },
  {
    id: "5",
    alt_description: ["1", "2", "3"],
    cat: "Escadas",
    port: ["/images/p5-1.jpg", "/images/p5-2.jpg", "/images/p5-3.jpg"],
  },
  {
    id: "3",
    alt_description: ["1", "2", "3"],
    cat: "Cozinhas",
    port: ["/images/p3-1.jpg", "/images/p3-2.jpg", "/images/p3-3.jpg"],
  },
  {
    id: "17",
    alt_description: ["1", "2"],
    cat: "Cozinhas",
    port: ["/images/p17-1.jpg", "/images/p17-2.jpg"],
  },
  {
    id: "8",
    alt_description: ["1", "2"],
    cat: "Escadas",
    port: ["/images/p8-1.jpg", "/images/p8-2.jpg"],
  },
  {
    id: "14",
    alt_description: ["1", "2"],
    cat: "Escadas",
    port: ["/images/p14-1.jpg", "/images/p14-2.jpg"],
  },
  {
    id: "15",
    alt_description: ["1", "2", "3", "4", "5"],
    cat: "Portas",
    port: [
      "/images/p15-1.jpg",
      "/images/p15-2.jpg",
      "/images/p15-3.jpg",
      "/images/p15-4.jpg",
      "/images/p15-5.jpg",
    ],
  },
  {
    id: "16",
    alt_description: ["1", "2"],
    cat: "Portas",
    port: ["/images/p16-1.jpg", "/images/p16-2.jpg"],
  },
  {
    id: "18",
    alt_description: ["1"],
    cat: "Cozinhas",
    port: ["/images/p18-1.jpg"],
  },
  {
    id: "19",
    alt_description: ["1", "2"],
    cat: "Mobiliário",
    port: ["/images/p19-1.jpg", "/images/p19-2.jpg"],
  },
];

const Portfolio = (props) => {
  function renderedImageList() {
    return images.map((image, i) => {
      return <ImageCard key={i} image={image} />;
    });
  }

  return (
    <div className="ui container">
      <Titles title="Portfólio" />
      <Pbuttons width={props.width} />
      <div className=" image-list">{renderedImageList()}</div>
    </div>
  );
};

export default Portfolio;
