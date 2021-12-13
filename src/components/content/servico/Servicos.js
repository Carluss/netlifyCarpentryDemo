import React, { useEffect, useState } from "react";
import { Transition } from "semantic-ui-react";
import { connect } from "react-redux";

import { servicosViewed } from "../../../actions";
import {
  ANIMATION_TIME,
  ANIMATION_TIME_PLUS,
  MOBILE_WIDTH,
  SERVICOS,
  ANIMATION_TIME_PASSED,
} from "../../util/Const";
import Servico from "./Servico";
import Titles from "../../util/Titles";
import "./servico.css";

const Servicoj = React.memo(
  (props) => {
    const [visible, setVisible] = useState(props.servViewd);

    useEffect(() => {
      if (
        props.width <= MOBILE_WIDTH &&
        props.width > 10 &&
        props.pixelsPassed >= 0 &&
        visible === false
      ) {
        console.log("MOIBIL");
        setVisible(true);
      } else if (
        props.pixelsPassed > ANIMATION_TIME_PASSED &&
        visible === false
      ) {
        setVisible(true);
        console.log("PC");
      }
    }, [props, visible]);

    const renderServicosAnimeted = () => {
      var time = ANIMATION_TIME;
      return SERVICOS.map((servico) => {
        time = time + ANIMATION_TIME_PLUS;
        return (
          <Transition
            key={servico.key}
            visible={visible}
            animation="fade right"
            duration={time}
            onComplete={() => props.servicosViewed()}
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
    };

    return (
      <>
        <Titles
          order={true}
          title="OS NOSSOS SERVIÇOS"
          subtitle="O QUE FAZEMOS"
        />
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="nine wide centered column">
              {renderServicosAnimeted()}
            </div>

            <div className="seven wide right floatedca column">
              <img
                className="ui bordered rounded image"
                src="/images/iqbal-anggawibawa-TWR8UHtxFFA-unsplash.jpg"
                alt="qwerty"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  },
  (nextProps) => {
    if (nextProps.servViewd) {
      return true;
    }
    return false;
  }
);

const mapStateToProps = (state) => {
  return { servViewd: state.path.servicos_viewed };
};

export default connect(mapStateToProps, { servicosViewed })(Servicoj);
