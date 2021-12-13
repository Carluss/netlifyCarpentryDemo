import React, { useRef } from "react";
import { Grid, Segment } from "semantic-ui-react";

import { SAPO_EMAIL, GMAIL, MORADA, PHONE } from "./util/Const";
import "./content/content.css";

const Footer = React.memo(() => {
  const renders = useRef(0);
  return (
    <div className="ui inverted vertical segment footer-segment">
      <div>{renders.current++}</div>
      <div className="ui container">
        <Grid centered>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <h4 className="ui header" style={{ color: "white" }}>
                Atendimento
              </h4>
              <div className="ui medium list">
                <div className="item">
                  <div className="content">Segunda à Sexta</div>
                </div>
                <div className="item">
                  <div className="content">08:00-17:00</div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <h4 className="ui header" style={{ color: "white" }}>
                Contactos
              </h4>
              <div className="ui medium list">
                <div className="item">
                  <i className="phone icon"></i>
                  <div className="content">
                    <a href={`tel:+351${PHONE}`}>{PHONE}</a>
                  </div>
                </div>
                <div className="item">
                  <i className="map icon"></i>
                  <div className="content">{MORADA}</div>
                </div>
                <div className="item">
                  <i className="mail icon"></i>
                  <div className="content">
                    <a href={`mailto:${GMAIL}`}>{GMAIL}</a>
                  </div>
                </div>
                <div className="item">
                  <i className="mail icon"></i>
                  <div className="content">
                    <a href={`mailto:${SAPO_EMAIL}`}>{SAPO_EMAIL}</a>
                  </div>
                </div>
                <div className="item">
                  <i className="facebook large icon">acebook</i>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Segment className="footer-boxD">
              <div className="ui container">
                <p>
                  <i className="copyright outline icon"></i> Carpintaria Manuel
                  Prates e filhos
                </p>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
});

export default Footer;
