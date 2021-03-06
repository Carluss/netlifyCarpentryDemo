import React, { useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { changePath, scrollContacts } from "../actions";
import { Container, Menu, Icon } from "semantic-ui-react";

/*--CSS imports--*/
import "./content/content.css";
import "./content/contactPage/contact.css";
import "./content/portfolio/portfolio.css";
import "./content/servico/servico.css";

import "react-image-lightbox/style.css";
import "semantic-ui-css/semantic.min.css";
import "leaflet/dist/leaflet.css";
/*--------------*/

import MainHeaderMenu from "./MainHeaderMenu";
import HeaderMobileMenu from "./content/HeaderMobileMenu";
import MainHeader from "./Header";
import history from "../history";
import Footer from "./Footer";

import { IMAGESPROJECT, IMAGESPORTFOLIO, MOBILE_WIDTH } from "./util/Const";

import Home from "./content/Home";
import Portfolio from "./content/portfolio/Portfolio";
import ProjectsPage from "./content/projectsPage/ProjectsPage";

const headerLargeSrc = `/images/cetteup-IC5sX-7PRN8-unsplash-large.webp`;
const headerNormalSrc = `/images/cetteup-IC5sX-7PRN8-unsplash.webp`;
const headerMobileSrc = `/images/cetteup-IC5sX-7PRN8-unsplash-mobile.webp`;

const App = React.memo((props) => {
  const calculations = useWindowSize();
  const [headerMenu, setHeaderMenu] = useState(false);

  useEffect(() => {
    console.log("https://github.com/Carluss/netlifyCarpentryDemo");
  }, []);
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (action === "POP") {
        props.changePath(location.pathname);
      }
    });

    return unlisten;
  }, [props]);

  const handleOpenMenu = () => {
    setHeaderMenu(!headerMenu);
  };

  return (
    <Router history={history}>
      <div className="Mainheader">
        <img
          className="pseudo-background-img"
          srcSet={`${headerMobileSrc} 768w, ${headerNormalSrc} 2400w, ${headerLargeSrc} 3040w`}
          src={headerNormalSrc}
          alt="header"
        />
        <MainHeader width={calculations.width} />
        {calculations.width > MOBILE_WIDTH ? (
          <MainHeaderMenu
            currentPath={props.currentPath}
            scrollContacts={props.scrollContacts}
            changePath={props.changePath}
          />
        ) : (
          <MobileMenu isOpen={headerMenu} handleOpenMenu={handleOpenMenu} />
        )}
      </div>
      {calculations.width <= MOBILE_WIDTH ? (
        <HeaderMobileMenu handleOpenMenu={handleOpenMenu} open={headerMenu} />
      ) : null}
      <Switch>
        <Route path="/" exact>
          <Home calculations={calculations} />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio title="Porf??lio" card={false} images={IMAGESPORTFOLIO} />
        </Route>
        <Route path="/projetos" exact>
          <ProjectsPage title="Projetos" card={true} images={IMAGESPROJECT} />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
});

const mapStateToProps = (state) => {
  return { currentPath: state.path.path };
};

export default connect(mapStateToProps, { changePath, scrollContacts })(App);

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

function MobileMenu(props) {
  const { isOpen, handleOpenMenu } = props;
  return (
    <Container className="masthead-menu" id="menuId">
      <Menu tabular className="header-menu">
        <Menu.Menu position="right">
          <Menu.Item
            active
            onClick={() => handleOpenMenu()}
            className={`${isOpen ? "inverted" : ""}`}
          >
            <Icon
              className={`${isOpen ? "inverted" : ""}`}
              name={isOpen ? "down angle" : "up angle"}
              style={{ margin: "0" }}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
}
