import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Icon, Menu, Container, Header } from "semantic-ui-react";
import { MOBILE_WIDTH } from "./util/Const";

const headerLargeSrc = `/images/cetteup-IC5sX-7PRN8-unsplash-large.webp`;
const headerNormalSrc = `/images/cetteup-IC5sX-7PRN8-unsplash.webp`;
const headerMobileSrc = `/images/cetteup-IC5sX-7PRN8-unsplash-mobile.webp`;

const MainHeader = React.memo((props) => {
  function handleItemClick() {
    console.log("this");
  }

  const { ref, inView } = useInView({
    threshold: 0.9,
    fallbackInView: true,
  });

  useEffect(() => {
    if (!inView && document.getElementById("scrollD")) {
      document.getElementById("scrollD").classList.remove("scrollDvisible");
      document.getElementById("scrollD").classList.add("scrollDhidden");
    } else if (document.getElementById("scrollD")) {
      document.getElementById("scrollD").classList.remove("scrollDhidden");
      document.getElementById("scrollD").classList.add("scrollDvisible");
    }
  }, [inView]);

  return (
    <div className="masthead header-white" ref={ref}>
      <Menu color="brown" secondary size="huge" className="header-cs">
        <img
          className="pseudo-background-img"
          srcSet={`${headerMobileSrc} 768w, ${headerNormalSrc} 2400w, ${headerLargeSrc} 3040w`}
          src={headerNormalSrc}
          alt="header"
        />
        <Menu.Item name="Principal">
          <Icon name="copyright outline" />
          Manuel Prates &amp; Filhos
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="PT" onClick={handleItemClick} />
          <Menu.Item name="EN" onClick={handleItemClick} />
        </Menu.Menu>
      </Menu>
      <Container className="masthead-container">
        <Header size="tiny" className="header-white header-top">
          #COZINHAS #PAVIMENTOS #JANELAS #PORTAS
        </Header>
        <Header size="large" className=" header-white header-title">
          Carpintaria Manuel Prates e Filhos
        </Header>
        <Header size="medium" className="header-white header-title-sub">
          Serviços de Carpintaria especializados.
        </Header>
      </Container>
      {props.width > MOBILE_WIDTH ? (
        <div id="scrollD" className="scrollD" style={{ cursor: "pointer" }}>
          <Icon
            onClick={() => {
              document.getElementById("menuId").scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            name="angle double down"
            size="huge"
          />
        </div>
      ) : null}
    </div>
  );
});

export default MainHeader;
