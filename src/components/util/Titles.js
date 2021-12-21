import React from "react";

const Titles = React.memo((props) => {
  const { order, title, subtitle } = props;
  return (
    <>
      {order ? (
        <div className="ui middle center aligned container  serv-titles">
          <h4 className="ui header serv-h4">
            <span>{subtitle}</span>
          </h4>
          <h2 className="ui header serv-h2">
            <span>{title}</span>
          </h2>
        </div>
      ) : (
        <div
          className="ui middle center aligned container  serv-titles"
          id="contactss"
        >
          <h2 className="ui header serv-h2">
            <span>{title}</span>
          </h2>
          <h4 className="ui header serv-h4">
            <span>{subtitle}</span>
          </h4>
        </div>
      )}
    </>
  );
});

export default Titles;
