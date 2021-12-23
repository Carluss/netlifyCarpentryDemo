import React from "react";
import { Header, Container, Grid, Image, GridColumn } from "semantic-ui-react";
import "./content.css";

const QuemSomos = () => {
  return (
    <Container>
      <Grid stackable className="container-quemsomos">
        <Grid.Row>
          <GridColumn width={11}>
            <Header as="h2" className="aboutus-i">
              SOBRE NÓS
            </Header>
            <p>
              Fusce non nisi viverra, efficitur tortor a, feugiat diam. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Aliquam lacinia ipsum a molestie accumsan.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Sed imperdiet, augue mollis mollis
              hendrerit.
            </p>
          </GridColumn>
          <Grid.Column width={5}>
            <Image
              size="large"
              rounded
              centered
              src="/images/logo.webp"
              alt="logo"
            ></Image>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default React.memo(QuemSomos);
