import React from "react";

import ButtonDirections from "./ButtonDirections";
import { SAPO_EMAIL, GMAIL, MORADA, PHONE } from "../../util/Const";

import "./contact.css";

const Info = (props) => {
  return (
    <>
      {props.info ? (
        <h3 className="ui center aligned header">Informação</h3>
      ) : null}
      <div className="ui large list">
        <div className="item">
          <i className="marker icon"></i>
          <div className="content">{MORADA}</div>
        </div>
        <div className="item">
          <i className="phone icon"></i>
          <div className="content">
            <a href={`tel:+351${PHONE}`}>{PHONE}</a>
          </div>
        </div>
        <div className="item">
          <i className="mail icon"></i>
          <div className="content">
            <a href={`mailto:${SAPO_EMAIL}`}>{SAPO_EMAIL}</a>
          </div>
        </div>
        <div className="item">
          <i className="mail icon"></i>
          <div className="content">
            <a href={`mailto:${GMAIL}`}>{GMAIL}</a>
          </div>
        </div>
        <div className="span-align-i">
          <ButtonDirections />
        </div>
      </div>
    </>
  );
};

export default Info;
