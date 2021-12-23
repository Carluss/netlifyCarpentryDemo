import React from "react";
import { Link } from "react-router-dom";
import history from "../history";
import { PATHS } from "./util/Const";
import { Container, Menu } from "semantic-ui-react";

const MainHeaderMenu = React.memo((props) => {
  const { currentPath, scrollContacts, changePath } = props;
  return (
    <Container className="masthead-menu" id="menuId">
      <Menu size="huge" tabular className="header-menu">
        <RenderMenu
          paths={PATHS}
          currentPath={currentPath}
          scrollContacts={scrollContacts}
          changePath={changePath}
        />
      </Menu>
    </Container>
  );
});

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
          <Menu.Menu key={path} position="right">
            <Menu.Item onClick={() => scrollTo()}>{content}</Menu.Item>
          </Menu.Menu>
        );
      default:
        return (
          <Menu.Item
            key={path}
            as={Link}
            to={path}
            active={path === props.currentPath}
            onClick={() => {
              if (window.location.pathname !== path) {
                props.changePath(path);
              }
            }}
          >
            {content}
          </Menu.Item>
        );
    }
  });
}
