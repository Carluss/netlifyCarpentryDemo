import React from "react";
import { Link } from "react-router-dom";
import history from "../history";
import { MOBILE_WIDTH, PATHS } from "./util/Const";

const MainHeaderMenu = (props) => {
  const {
    width,
    handleOpenMenu,
    currentPath,
    scrollContacts,
    isOpen,
    changePath,
  } = props;
  return (
    <div className="ui container masthead-menu" id="menuId">
      <div className="ui big tabular menu header-menu ">
        {width > MOBILE_WIDTH ? (
          <RenderMenu
            paths={PATHS}
            handleOpenMenu={handleOpenMenu}
            currentPath={currentPath}
            scrollContacts={scrollContacts}
            isOpen={isOpen}
            changePath={changePath}
          />
        ) : (
          <div className="right menu">
            <button
              className={`item ${isOpen ? "inverted" : ""} active`}
              onClick={() => handleOpenMenu()}
            >
              <i
                className={`${
                  isOpen ? "inverted down angle" : "up angle"
                } icon`}
                style={{ margin: "0" }}
              ></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHeaderMenu;

function RenderMenu(props) {
  const scrollTo = () => {
    if (props.currentPath !== "/") {
      props.changePath("/");
      history.push("/");
    }
    props.scrollContacts();
  };
  return props.paths.map(({ path, content }) => {
    switch (path) {
      case "/contactos":
        return (
          <div key={path} className="right menu">
            <button
              key={path}
              style={{ cursor: "pointer" }}
              className={`item ${
                path === props.currentPath ? "active" : ""
              } hidden`}
              onClick={() => scrollTo()}
            >
              {content}
            </button>
          </div>
        );
      default:
        return (
          <Link
            key={path}
            to={path}
            className={`item ${path === props.currentPath ? "active" : ""}`}
            onClick={() => {
              if (window.location.pathname !== path) {
                props.changePath(path);
              }
            }}
          >
            {content}
          </Link>
        );
    }
  });
}
