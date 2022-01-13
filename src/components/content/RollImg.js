import React from "react";
import { Link } from "react-router-dom";
import { ResponsiveImageThumbnail } from "../util/ResponsiveImage";
import {
  Segment,
  Header,
  Icon,
  Divider,
  Container,
  Grid,
  Image,
} from "semantic-ui-react";

const imageLeft = {
  webpimage: "/images/roll/p1.webp",
  image: "/images/roll/p1.jpg",
};
const imageRight = {
  webpimage: "/images/roll/p2.webp",
  image: "/images/roll/p2.jpg",
};
const RollImg = (props) => {
  return (
    <React.Fragment>
      <Segment className="roll-img-segment">
        <Divider horizontal>
          <Header
            as={Link}
            to="/portfolio"
            style={{
              color: "var(--primaryDarker)",
            }}
            className="roll-link roll-link-size"
            onClick={() => {
              props.changePath("/portfolio");
              setTimeout(function () {
                document.getElementById("menuId").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 200);
            }}
          >
            <Icon name="images outline" />
            Portfólio
          </Header>
        </Divider>

        <Container>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className="roll-img-container">
                  <Image rounded>
                    <ResponsiveImageThumbnail
                      classNameI="roll-img"
                      alt="qwerty"
                      image={imageLeft}
                    />
                  </Image>
                </div>
                <div className="roll-img-container roll-img-text">
                  <Header
                    as={Link}
                    to="/portfolio"
                    onClick={() => {
                      props.changePathFilter("/portfolio", "Cozinhas");
                      setTimeout(function () {
                        document.getElementById("menuId").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 200);
                    }}
                  >
                    <Header as="h2" className="roll-link">
                      Cozinhas
                    </Header>
                  </Header>
                  <p className="roll-text">
                    Tellus suscipit laoreet. Curabitur tempus tortor quis tellus
                    consectetur scelerisque. Curabitur feugiat, mi non tempor
                    efficitur.Tellus suscipit laoreet.
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column width={8} floated="right">
                <div className="roll-img-container">
                  <Image rounded>
                    <ResponsiveImageThumbnail
                      classNameI="roll-img"
                      alt="qwerty"
                      image={imageRight}
                    />
                  </Image>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </React.Fragment>
  );
};
export default RollImg;
