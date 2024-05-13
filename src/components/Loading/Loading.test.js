import React from "react";
import { render } from "@testing-library/react";
import Loading from "../Loading/index";

describe("Loading Component", () => {
  test("should render without crashing", () => {
    render(<Loading />);
  });
});
