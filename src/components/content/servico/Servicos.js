import React, { useEffect, useState } from "react";
import { Transition, Container, Grid, Image } from "semantic-ui-react";

import {
  ANIMATION_TIME,
  ANIMATION_TIME_PLUS,
  MOBILE_WIDTH,
  SERVICOS,
} from "../../util/Const";
import Servico from "./Servico";
import Titles from "../../util/Titles";
import { useInView } from "react-intersection-observer";
import { ResponsiveImageThumbnail } from "../../util/ResponsiveImage";

const image = {
  webpimage: "/images/iqbal-anggawibawa-TWR8UHtxFFA-unsplash.webp",
  image: "/images/iqbal-anggawibawa-TWR8UHtxFFA-unsplash.jpg",
};

const Servicoj = React.memo(
  (props) => {
    const [visible, setVisible] = useState(props.servViewd);

    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
      fallbackInView: true,
    });

    useEffect(() => {
      if (
        props.width <= MOBILE_WIDTH &&
        props.width > 10 &&
        visible === false
      ) {
        //console.log("PHONE");
        setVisible(true);
      } else if (inView && visible === false) {
        setVisible(true);
        props.servicosViewed();
        console.log("trigger");

        //console.log("PC");
      }
    }, [props, visible, inView]);

    return (
      <div style={{ minHeight: "500px" }} ref={ref} data-testid="titleRef">
        <Titles
          order={true}
          title="OS NOSSOS SERVIÇOS"
          subtitle="O QUE FAZEMOS"
        />

        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={9} verticalAlign="middle">
                <RenderServicosAnimeted visible={visible} />
              </Grid.Column>
              <Grid.Column width={7} floated="right">
                <Image rounded bordered centered>
                  <ResponsiveImageThumbnail alt="qwerty" image={image} />
                </Image>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  },
  (nextProps) => {
    if (nextProps.servViewd) {
      return true;
    }
    return false;
  }
);

function RenderServicosAnimeted({ visible }) {
  var time = ANIMATION_TIME;
  return SERVICOS.map((servico) => {
    time = time + ANIMATION_TIME_PLUS;
    return (
      <Transition
        key={servico.key}
        visible={visible}
        animation="fade right"
        duration={time}
        mountOnShow={false}
      >
        <div style={{ marginTop: "20px" }}>
          <Servico
            key={servico.key}
            image={servico.image ? servico.image : null}
            title={servico.title}
            subTitle={servico.subTitle ? servico.subTitle : null}
            content={servico.content}
          ></Servico>
        </div>
      </Transition>
    );
  });
}

export default Servicoj;
