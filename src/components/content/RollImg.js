import React from "react";
import { connect } from "react-redux";
import { changePath, changePathFilter } from "../../actions";
import { Link } from "react-router-dom";

import "./content.css";

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
                <img
                  className="ui rounded image roll-img"
                  src="/images/roll/mateusz-butkiewicz-2Ue8MIYmQyM-unsplash.jpg"
                  alt="qwerty"
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
                <img
                  className="ui rounded image roll-img"
                  src="/images/roll/dane-deaner-l2eTNVrendQ-unsplash.jpg"
                  alt="qwerty"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default connect(null, { changePath, changePathFilter })(RollImg);
