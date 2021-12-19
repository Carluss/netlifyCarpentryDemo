import React, { useState } from "react";
import { Dropdown, Input } from "semantic-ui-react";

import { PORTFOLIO_BUTTONS_CAT } from "../../util/Const";

const Pbuttons = (props) => {
  const [searchFil, setSearchFil] = useState("");

  return (
    <div className="dropDown-se">
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
            data-testid="search"
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
          <RenderDropDownItem
            searchFilter={searchFil}
            filter={props.filter}
            filterApplied={props.filterApplied}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

function RenderDropDownItem({ searchFilter, filter, filterApplied }) {
  return PORTFOLIO_BUTTONS_CAT.map((button) => {
    const { text, image } = button;
    if (
      text.toLowerCase().includes(searchFilter) ||
      searchFilter.length === 0
    ) {
      if (filter === text) {
        return (
          <Dropdown.Item
            key={text}
            active={true}
            image={image}
            text={text}
            data-testid="searchItem"
            onClick={() => filterApplied(text)}
          />
        );
      } else {
        return (
          <Dropdown.Item
            key={text}
            image={image}
            text={text}
            data-testid="searchItem"
            onClick={() => filterApplied(text)}
          />
        );
      }
    } else {
      return null;
    }
  });
}

export default React.memo(Pbuttons);
