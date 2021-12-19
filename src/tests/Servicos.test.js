import React from "react";
import { render } from "@testing-library/react";
import Servicos from "../components/content/servico/Servicos";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

it("map renders correctly", () => {
  const servicosViewed = jest.fn();
  const { getByText } = render(
    <Servicos width={1000} servViewd={true} servicosViewed={servicosViewed} />
  );

  expect(getByText("OS NOSSOS SERVIÇOS")).toBeTruthy();
});

describe("Servicos", () => {
  describe("Servicos was animated", () => {
    it("dont call servicosViewed function", () => {
      const servicosViewed = jest.fn();
      render(
        <Servicos
          width={1000}
          servViewd={true}
          servicosViewed={servicosViewed}
        />
      );

      expect(servicosViewed).not.toHaveBeenCalled();
    });
  });
  describe("Servicos was not animated and being viewd on PC", () => {
    it("call servicosViewed function", () => {
      const servicosViewed = jest.fn();
      render(
        <Servicos
          width={1000}
          servViewd={false}
          servicosViewed={servicosViewed}
        />
      );

      mockAllIsIntersecting(true);
      expect(servicosViewed).toHaveBeenCalled();
    });
  });
});
