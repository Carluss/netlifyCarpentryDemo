import React, { useRef } from "react";
import "./content.css";

const QuemSomos = () => {
  return (
    <div className="ui middle aligned stackable grid container container-quemsomos">
      <div className="row">
        <div className="eleven wide column">
          <h2 className="ui header aboutus-i">SOBRE NÓS</h2>
          <p>
            Fusce non nisi viverra, efficitur tortor a, feugiat diam. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam lacinia ipsum a molestie accumsan. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Sed imperdiet, augue mollis mollis hendrerit.
          </p>
        </div>
        <div className="five wide right floated column">
          <img
            className="ui large rounded image"
            src="/images/logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(QuemSomos);
