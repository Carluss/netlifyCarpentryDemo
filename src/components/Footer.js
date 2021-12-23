import React from "react";
import {
  Grid,
  Segment,
  Container,
  Header,
  List,
  Item,
  Icon,
} from "semantic-ui-react";

import { SAPO_EMAIL, GMAIL, MORADA, PHONE } from "./util/Const";
import "./content/content.css";

const Footer = React.memo(() => {
  return (
    <Segment inverted vertical className="footer-segment">
      <Container>
        <Grid centered>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <Header as="h4" style={{ color: "white" }}>
                Atendimento
              </Header>
              <List size="medium">
                <Item>
                  <Item.Content>Segunda à Sexta</Item.Content>
                </Item>
                <Item>
                  <Item.Content>08:00-17:00</Item.Content>
                </Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h4" style={{ color: "white" }}>
                Contactos
              </Header>
              <List>
                <Item>
                  <Icon name="phone" />
                  <Item.Content as="a" href={`tel:+351${PHONE}`}>
                    {PHONE}
                  </Item.Content>
                </Item>
                <Item>
                  <Icon name="map" />
                  <Item.Content>{MORADA}</Item.Content>
                </Item>
                <Item>
                  <Icon name="mail" />
                  <Item.Content as="a" href={`mailto:${SAPO_EMAIL}`}>
                    {SAPO_EMAIL}
                  </Item.Content>
                </Item>
                <Item>
                  <Icon name="mail" />
                  <Item.Content as="a" href={`mailto:${GMAIL}`}>
                    {GMAIL}
                  </Item.Content>
                </Item>
                <Item>
                  <Icon name="facebook" />
                  <Item.Content as="a" href="#">
                    Facebook
                  </Item.Content>
                </Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Segment className="footer-boxD">
              <Container>
                <p>
                  <Icon name="copyright outline" />
                  Carpintaria Manuel Prates e filhos
                </p>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
});

export default Footer;
