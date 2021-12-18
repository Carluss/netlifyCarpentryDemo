import React, { useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { changePath } from "../actions";

import HeaderMenu from "./content/HeaderMenu";
import Header from "./Header";
import history from "../history";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";
import "leaflet/dist/leaflet.css";

import { IMAGESPROJECT, IMAGESPORTFOLIO, MOBILE_WIDTH } from "./util/Const";

import "./content/content.css";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import Home from "./content/Home";
import Portfolio from "./content/portfolio/Portfolio";
import ProjectsPage from "./content/projectsPage/ProjectsPage";

const App = (props) => {
  const calculations = useWindowSize();
  const [headerMenu, setHeaderMenu] = useState(false);

  useEffect(() => {
    console.log("https://github.com/Carluss/netlifyCarpentryDemo");
    const unlisten = history.listen((location, action) => {
      if (action === "POP") {
        props.changePath(location.pathname);
      }
    });

    return unlisten;
  }, [props]);

  const handleOpenMenu = () => {
    setHeaderMenu(headerMenu ? false : true);
  };

  return (
    <div>
      <Router history={history}>
        <React.StrictMode>
          <Header
            width={calculations.width}
            handleOpenMenu={handleOpenMenu}
            isOpen={headerMenu}
          />
          {calculations.width <= MOBILE_WIDTH ? (
            <HeaderMenu handleOpenMenu={handleOpenMenu} open={headerMenu} />
          ) : null}
          <Switch>
            <Route path="/" exact>
              <Home calculations={calculations} />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio
                title="Porfólio"
                card={false}
                images={IMAGESPORTFOLIO}
              />
            </Route>
            <Route path="/projetos" exact>
              <ProjectsPage
                title="Projetos"
                card={true}
                images={IMAGESPROJECT}
              />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </React.StrictMode>
      </Router>
    </div>
  );
};

export default connect(null, { changePath })(App);

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
