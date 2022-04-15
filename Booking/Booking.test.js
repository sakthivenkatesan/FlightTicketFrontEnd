import {render , screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import Booking from "./Booking";
/* import { useContext } from "react";  */


test('LocationId should be rendered', () => {
    render(<Booking />);
    const BookingIdEl = screen.getByPlaceholderText(/BookingId/i);
    expect(BookingIdEl).toBeInTheDocument();
  });