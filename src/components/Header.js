import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Icon, Menu } from "semantic-ui-react";

import { changePath, scrollContacts, servicosViewed } from "../actions";
import history from "../history";
import { MOBILE_WIDTH, PATHS, MOBILE_PATHS } from "./util/Const";

const headerLargeSrc = `/images/pedro-da-silva-cUIIJhUa538-unsplash-large.webp`;
const headerNormalSrc = `/images/pedro-da-silva-cUIIJhUa538-unsplash.webp`;
const headerMobileSrc = `/images/pedro-da-silva-cUIIJhUa538-unsplash-mobile.webp`;
class Header extends React.Component {
  state = {
    visible: false,
  };
  renders = React.createRef(0);

  renderMenu(paths) {
    return paths.map(({ path, content }) => {
      switch (path) {
        case "/contactos":
          return (
            <div key={path} className="right menu">
              <button
                key={path}
                style={{ cursor: "pointer" }}
                className={`item ${
                  path === this.props.currentPath ? "active" : ""
                } hidden`}
                onClick={() => this.scrollTo()}
              >
                {content}
              </button>
            </div>
          );
        case "/bars":
          return (
            <div key={path} className="right menu">
              <button
                className={`item ${this.props.isOpen ? "inverted" : ""} active`}
                onClick={() => this.props.handleOpenMenu()}
              >
                <i
                  className={`${
                    this.props.isOpen ? "inverted down angle" : "up angle"
                  } icon`}
                  style={{ margin: "0" }}
                ></i>
              </button>
            </div>
          );
        default:
          return (
            <Link
              key={path}
              to={path}
              className={`item ${
                path === this.props.currentPath ? "active" : ""
              }`}
              onClick={() => this.props.changePath(path)}
            >
              {content}
            </Link>
          );
      }
    });
  }

  onSubm = async () => {
    const response = await axios
      .get("http://localhost:8080/greeting", {
        params: {
          name: "Bob",
        },
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(response.data);
  };

  scrollTo() {
    if (this.props.currentPath !== "/") {
      this.props.changePath("/");
      history.push("/");
    }
    this.props.scrollContacts();
  }

  handleOnClickSideBar(path) {
    this.setState({ visible: false });
    if (path === "/contactos") {
      this.scrollTo();
    } else {
      this.props.changePath(path);
    }
  }

  handleItemClick() {
    console.log("this");
  }
  render() {
    return (
      <div className="masthead header-white">
        <Menu color="brown" secondary size="huge">
          <img
            className="pseudo-background-img"
            src={headerMobileSrc}
            srcSet={`${headerMobileSrc} 768w, ${headerNormalSrc} 2400w, ${headerLargeSrc} 3040w`}
            alt="header"
          />
          <Menu.Item name="Principal">
            <Icon name="copyright outline" />
            Manuel Prates &amp; Filhos
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="PT" onClick={this.handleItemClick} />
            <Menu.Item name="EN" onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
        <div className="ui container masthead-container">
          <div className="ui tiny header header-white header-top">
            #COZINHAS #PAVIMENTOS #JANELAS #PORTAS
          </div>
          <div className="ui large header header-white header-title">
            Carpintária Manuel Prates e Filhos
          </div>
          <div className="ui medium header header-white header-title-sub">
            Serviços de Carpintária especializados.
          </div>
        </div>
        <div className="ui container masthead-menu" id="menuId">
          <div className="ui big tabular menu header-menu ">
            {this.props.width > MOBILE_WIDTH
              ? this.renderMenu(PATHS)
              : this.renderMenu(MOBILE_PATHS)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentPath: state.path.path };
};

export default connect(mapStateToProps, {
  changePath,
  scrollContacts,
  servicosViewed,
})(Header);
