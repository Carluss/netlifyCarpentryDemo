import React from "react";
import { Icon, Menu, Container, Header } from "semantic-ui-react";

const headerLargeSrc = `/images/cetteup-IC5sX-7PRN8-unsplash-large.webp`;
const headerNormalSrc = `/images/cetteup-IC5sX-7PRN8-unsplash.webp`;
const headerMobileSrc = `/images/cetteup-IC5sX-7PRN8-unsplash-mobile.webp`;

const MainHeader = React.memo(() => {
  function handleItemClick() {
    console.log("this");
  }

  return (
    <div className="masthead header-white">
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
    </div>
  );
});

export default MainHeader;
