import React from "react";
import { Container, Header } from "semantic-ui-react";

const Titles = React.memo((props) => {
  const { order, title, subtitle } = props;
  return (
    <>
      {order ? (
        <Container textAlign="center" className="serv-titles">
          <Header as="h4" className="serv-h4">
            <span>{subtitle}</span>
          </Header>
          <Header as="h2" className="serv-h2">
            <span>{title}</span>
          </Header>
        </Container>
      ) : (
        <Container textAlign="center" className="serv-titles" id="contactss">
          <Header as="h2" className="serv-h2">
            <span>{title}</span>
          </Header>
          <Header as="h4" className="serv-h4">
            <span>{subtitle}</span>
          </Header>
        </Container>
      )}
    </>
  );
});

export default Titles;
