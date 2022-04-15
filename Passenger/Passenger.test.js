import {render , screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Passenger from "./Passenger";

test('PassengerId should be rendered', () => {
    render(<Passenger />);
    const passengerIdEl = screen.getByTestId(/passengerId/i);
    expect(passengerIdEl).toBeInTheDocument();
  });