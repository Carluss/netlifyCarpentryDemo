import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pbuttons from "../components/content/portfolio/Pbuttons";

it("renders  correctly", () => {
  const { queryByTestId, queryByDisplayValue } = render(
    <Pbuttons filter="Tudo" />
  );

  expect(queryByTestId("search")).toBeTruthy();
  expect(queryByDisplayValue("")).toBeTruthy();
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByDisplayValue } = render(<Pbuttons filter="Tudo" />);

    const searchInput = queryByDisplayValue("");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});

describe("Search dropdown button", () => {
  describe("Not clicked", () => {
    it("does not trigger requestSearch function", () => {
      const filterApplied = jest.fn();
      render(<Pbuttons filter="Tudo" filterApplied={filterApplied} />);

      expect(filterApplied).not.toHaveBeenCalled();
    });
  });

  describe("Clicked", () => {
    it("triggers requestSearch function", () => {
      const filterApplied = jest.fn();
      const { queryAllByTestId } = render(
        <Pbuttons filter="Tudo" filterApplied={filterApplied} />
      );

      queryAllByTestId("searchItem").map((item) => {
        return fireEvent.click(item);
      });

      expect(filterApplied).toBeCalledTimes(
        queryAllByTestId("searchItem").length
      );
    });
  });
});
