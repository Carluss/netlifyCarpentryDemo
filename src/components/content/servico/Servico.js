import React from "react";

import "./servico.css";

class Servico extends React.Component {
  state = {
    calculations: {
      topVisible: false,
    },
    visible: false,
  };
  render() {
    return (
      <>
        <h2 className="ui header serv-headers">
          {this.props.image ? <i className={this.props.image} /> : null}

          {this.props.subTitle ? (
            <div className="content">
              {this.props.title}
              <div className="sub header">{this.props.subTitle}</div>
            </div>
          ) : (
            <>{this.props.title}</>
          )}
        </h2>

        <p className="serv-p">{this.props.content}</p>
      </>
    );
  }
}

export default Servico;
