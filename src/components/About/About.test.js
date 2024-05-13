import React from "react";
import { render } from "@testing-library/react";
import About from "../About/index";

describe("About Component", () => {
  test("should render without crashing", () => {
    render(<About />);
  });
});
