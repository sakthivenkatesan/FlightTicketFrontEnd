import {render , screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Fleet from "./fleet";

test('Fleet Id should be rendered', () => {
    render(<Fleet />);
    const FleetIdE1 = screen.getByPlaceholderText(/FleetId/i);
    expect(FleetIdE1).toBeInTheDocument();
  });
  