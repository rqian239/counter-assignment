// import necessary react testing library helpers here
// import the Counter component here

import { render } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
});
