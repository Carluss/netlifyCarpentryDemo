import React from "react";
import { render } from "@testing-library/react";
import ContactsPage from "../components/content/contactPage/ContactsPage";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

it("map renders correctly", () => {
  const mapVisible = jest.fn();
  const { queryByTestId } = render(
    <ContactsPage width={1000} mapVisible={mapVisible} isMapVisible={true} />
  );

  expect(queryByTestId("mapItem")).toBeTruthy();
});

describe("Map", () => {
  describe("Map is loaded", () => {
    it("dont call mapVisible function", () => {
      const mapVisible = jest.fn();
      render(
        <ContactsPage
          width={1000}
          mapVisible={mapVisible}
          isMapVisible={true}
        />
      );

      expect(mapVisible).not.toHaveBeenCalled();
    });
  });
  describe("Map is not loaded and not visible", () => {
    it("dont call mapVisible function", () => {
      const mapVisible = jest.fn();
      render(
        <ContactsPage
          width={1000}
          mapVisible={mapVisible}
          isMapVisible={false}
        />
      );

      mockAllIsIntersecting(false);

      expect(mapVisible).not.toHaveBeenCalled();
    });
  });
  describe("Map is not loaded and visible", () => {
    it("call mapVisible function", () => {
      const mapVisible = jest.fn();
      render(
        <ContactsPage
          width={1000}
          mapVisible={mapVisible}
          isMapVisible={false}
        />
      );

      mockAllIsIntersecting(true);

      expect(mapVisible).toHaveBeenCalled();
    });
  });
});
