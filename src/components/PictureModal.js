import React from "react";
import ReactDOM from "react-dom";

const PictureModal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Picture</div>
        <div className=" content">
          <img className={props.img} src={props.src} />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default PictureModal;
