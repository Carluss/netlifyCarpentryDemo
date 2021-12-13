import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { changePath } from "../actions";
import { Visibility } from "semantic-ui-react";

import Header from "./Header";
import history from "../history";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";
import "leaflet/dist/leaflet.css";

import "./content/content.css";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import Home from "./content/Home";
import HeaderMenu from "./content/HeaderMenu";
import Portfolio from "./content/portfolio/Portfolio";
import ProjectsPage from "./content/projectsPage/ProjectsPage";

class App extends React.Component {
  state = {
    calculations: {
      width: 0,
      onScreen: false,
      pixelsPassed: 0,
    },
    headerMenu: false,
  };

  componentDidMount() {
    this.unlisten = history.listen((location, action) => {
      if (action === "POP") {
        this.props.changePath(location.pathname);
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleUpdate = (e, { calculations }) => this.setState({ calculations });

  handleOpenMenu = () => {
    this.setState({ headerMenu: this.state.headerMenu ? false : true });
  };

  render() {
    /*console.log(
      "Width: ",
      this.state.calculations.width,
      "pixelsPassed: ",
      this.state.calculations.pixelsPassed
    );*/

    return (
      <div>
        <Router history={history}>
          <Visibility fireOnMount onUpdate={this.handleUpdate}>
            <Header
              width={this.state.calculations.width}
              handleOpenMenu={this.handleOpenMenu}
              isOpen={this.state.headerMenu}
            />
            <HeaderMenu
              handleOpenMenu={this.handleOpenMenu}
              open={this.state.headerMenu}
            />
            <Switch>
              <Route path="/" exact>
                <Home calculations={this.state.calculations} />
              </Route>
              <Route path="/portfolio" exact>
                <Portfolio width={this.state.calculations.width} />
              </Route>
              <Route path="/projetos" exact>
                <ProjectsPage width={this.state.calculations.width} />
              </Route>
              <Redirect to="/" />
            </Switch>
            <Footer />
          </Visibility>
        </Router>
      </div>
    );
  }
}

export default connect(null, { changePath })(App);
