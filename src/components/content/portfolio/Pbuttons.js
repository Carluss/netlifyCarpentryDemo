import React, { useState } from "react";
import { Dropdown, Input } from "semantic-ui-react";

import { connect } from "react-redux";
import { filterApplied } from "../../../actions";
import { PORTFOLIO_BUTTONS_CAT } from "../../util/Const";

const Pbuttons = (props) => {
  const [searchFil, setSearchFil] = useState("");

  const renderDropDownItem = (searchFilter) => {
    return PORTFOLIO_BUTTONS_CAT.map((button) => {
      const { text, image } = button;
      if (
        text.toLowerCase().includes(searchFilter) ||
        searchFilter.length === 0
      ) {
        if (props.filter === text) {
          return (
            <Dropdown.Item
              key={text}
              active={true}
              image={image}
              text={text}
              onClick={() => props.filterApplied(text)}
            />
          );
        } else {
          return (
            <Dropdown.Item
              key={text}
              image={image}
              text={text}
              onClick={() => props.filterApplied(text)}
            />
          );
        }
      } else {
        return null;
      }
    });
  };

  const renderButtonsMobile = () => {
    return (
      <Dropdown
        text={
          props.filter === PORTFOLIO_BUTTONS_CAT[0].text
            ? "Filtro"
            : props.filter
        }
        icon="filter"
        floating
        labeled
        button
        className="icon dropDown-button"
        onChange={(e) => setSearchFil(e.target.value.toLowerCase())}
      >
        <Dropdown.Menu>
          <Dropdown.Header content="Opções" />
          <Input
            autoComplete="off"
            onKeyUp={(e) => {
              if (e.keyCode === 32) {
                e.target.value = e.target.value + " ";
                e.stopPropagation();
              }
            }}
            icon="search"
            iconPosition="left"
            name="search"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <Dropdown.Header />
          <Dropdown.Divider />
          {renderDropDownItem(searchFil)}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return <div className="dropDown-se">{renderButtonsMobile()}</div>;
};

const mapStateToProps = (state) => {
  return { filter: state.path.filter };
};

export default connect(mapStateToProps, { filterApplied })(Pbuttons);
