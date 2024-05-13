import React from "react";
import { render } from "@testing-library/react";
import Contact from "../Contact/index";

describe("Media Component", () => {
  test("renders without crashing", () => {
    render(<Contact />);
  });
});
