import React from "react";
import { Header } from "semantic-ui-react";

const Servico = React.memo((props) => {
  return (
    <>
      <Header as="h2" className="serv-headers">
        {props.image ? <i className={props.image} /> : null}

        {props.subTitle ? (
          <Header.Content>
            {props.title}
            <Header.Subheader>{props.subTitle}</Header.Subheader>
          </Header.Content>
        ) : (
          <>{props.title}</>
        )}
      </Header>
      <p className="serv-p">{props.content}</p>
    </>
  );
});

export default Servico;
