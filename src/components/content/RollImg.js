import React from "react";
import { Link } from "react-router-dom";
import { ResponsiveImageThumbnail } from "../util/ResponsiveImage";

import "./content.css";

const imageLeft = {
  webpimage: "/images/roll/p1.webp",
  image: "/images/roll/p1.jpg",
};
const imageRight = {
  webpimage: "/images/roll/p2.webp",
  image: "/images/roll/p2.jpg",
};
const RollImg = (props) => {
  return (
    <React.Fragment>
      <div className="ui segment roll-img-segment">
        <h4
          className="ui horizontal divider header"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <i
            className="images outline icon"
            style={{ color: "var(--primaryDarker)" }}
          ></i>
          <Link
            className="roll-link roll-link-size"
            to="/portfolio"
            onClick={() => {
              props.changePath("/portfolio");
              setTimeout(function () {
                document.getElementById("menuId").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 200);
            }}
          >
            Portfólio
          </Link>
        </h4>
        <div className="ui container middle stackable two column grid">
          <div className="row">
            <div className="eight wide column">
              <div className="roll-img-container">
                <ResponsiveImageThumbnail
                  classNameI="ui rounded image roll-img"
                  alt="qwerty"
                  image={imageLeft}
                />
              </div>
              <div className="roll-img-container roll-img-text">
                <h2 className="ui header">
                  <Link
                    className="roll-link"
                    to="/portfolio"
                    onClick={() => {
                      props.changePathFilter("/portfolio", "Cozinhas");
                      setTimeout(function () {
                        document.getElementById("menuId").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 200);
                    }}
                  >
                    Cozinhas
                  </Link>
                </h2>
                <p className="roll-text">
                  Tellus suscipit laoreet. Curabitur tempus tortor quis tellus
                  consectetur scelerisque. Curabitur feugiat, mi non tempor
                  efficitur.Tellus suscipit laoreet.
                </p>
              </div>
            </div>
            <div className="eight wide right floated column">
              <div className="roll-img-container">
                <ResponsiveImageThumbnail
                  classNameI="ui rounded image roll-img"
                  alt="qwerty"
                  image={imageRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default RollImg;
