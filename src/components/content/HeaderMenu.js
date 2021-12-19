import React from "react";
import AnimateHeight from "react-animate-height";
import { connect } from "react-redux";
import { changePath, scrollContacts, servicosViewed } from "../../actions";
import { Link } from "react-router-dom";
import history from "../../history";
import { Transition, Menu } from "semantic-ui-react";

import { PATHS } from "../util/Const";

const HeaderMenu = (props) => {
  const onMenuClicked = (path) => {
    if (path === "/contactos") {
      scrollTo();
    } else {
      if (window.location.pathname !== path) {
        props.changePath(path);
      }
      props.handleOpenMenu();
    }
  };
  const scrollTo = () => {
    if (props.currentPath !== "/") {
      props.changePath("/");
      history.push("/");
    }
    setTimeout(function () {
      props.scrollContacts();
    }, 500);
    props.handleOpenMenu();
  };

  return (
    <AnimateHeight duration={500} height={props.open ? "auto" : 0}>
      <Transition visible={props.open} animation="slide left" duration={500}>
        <Menu vertical inverted compact widths={16}>
          <RenderMenuItems onMenuClicked={onMenuClicked} />
        </Menu>
      </Transition>
    </AnimateHeight>
  );
};

function RenderMenuItems({ onMenuClicked }) {
  return PATHS.map(({ path, content }) => {
    if (path === "/contactos") {
      return (
        <Menu.Item key={path} onClick={() => onMenuClicked(path)}>
          {content}
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item
          key={path}
          as={Link}
          to={path}
          onClick={() => onMenuClicked(path)}
        >
          {content}
        </Menu.Item>
      );
    }
  });
}

const mapStateToProps = (state) => {
  return { currentPath: state.path.path };
};

export default connect(mapStateToProps, {
  changePath,
  scrollContacts,
  servicosViewed,
})(HeaderMenu);
