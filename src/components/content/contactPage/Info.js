import React from "react";
import { Header, List, Icon } from "semantic-ui-react";

import ButtonDirections from "./ButtonDirections";
import { SAPO_EMAIL, GMAIL, MORADA, PHONE } from "../../util/Const";

import "./contact.css";

const Info = (props) => {
  return (
    <>
      {props.info ? (
        <Header as="h3" textAlign="center">
          Informação
        </Header>
      ) : null}
      <List size="large">
        <List.Item>
          <Icon name="marker" />
          <List.Content>{MORADA}</List.Content>
        </List.Item>
        <List.Item>
          <Icon name="phone" />
          <List.Content as="a" href={`tel:+351${PHONE}`}>
            {PHONE}
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name="mail" />
          <List.Content as="a" href={`mailto:${SAPO_EMAIL}`}>
            {SAPO_EMAIL}
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name="mail" />
          <List.Content as="a" href={`mailto:${GMAIL}`}>
            {GMAIL}
          </List.Content>
        </List.Item>
      </List>
      <div className="span-align-i">
        <ButtonDirections />
      </div>
    </>
  );
};

export default Info;
