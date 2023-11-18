// import necessary react testing library helpers here
// import the Counter component here

import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component
  render(<Counter />);
})

test('renders counter message', () => {
  const countMessage = screen.getByText(/counter/i);
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent('0')
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countNumber = screen.getByTestId('count')
  expect(countNumber).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByText('-');
  fireEvent.click(incrementButton);
  const countNumber = screen.getByTestId('count')
  expect(countNumber).toHaveTextContent('-1');
});
