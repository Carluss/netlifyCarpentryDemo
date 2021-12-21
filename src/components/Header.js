import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const headerLargeSrc = `/images/cetteup-IC5sX-7PRN8-unsplash-large.webp`;
const headerNormalSrc = `/images/cetteup-IC5sX-7PRN8-unsplash.webp`;
const headerMobileSrc = `/images/cetteup-IC5sX-7PRN8-unsplash-mobile.webp`;

const Header = React.memo(() => {
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
      <div className="ui container masthead-container">
        <div className="ui tiny header header-white header-top">
          #COZINHAS #PAVIMENTOS #JANELAS #PORTAS
        </div>
        <div className="ui large header header-white header-title">
          Carpintaria Manuel Prates e Filhos
        </div>
        <div className="ui medium header header-white header-title-sub">
          Serviços de Carpintaria especializados.
        </div>
      </div>
    </div>
  );
});

export default Header;
