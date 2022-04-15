import {render , screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Login from "./Login"

test('Customerid should be rendered', () => {
    render(<Login />);
    const usernameEl = screen.getByTestId(/Username/i);
    expect(usernameEl).toBeInTheDocument();
  });
