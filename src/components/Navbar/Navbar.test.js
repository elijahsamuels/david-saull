import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './index';

describe("Navbar Component", () => {
  test("should render without crashing", () => {
    render(<Navbar />);
  });
});
