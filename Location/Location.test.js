import {render , screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Location from "./Location";

test('LocationId should be rendered', () => {
    render(<Location />);
    const LocationIdE1 = screen.getByPlaceholderText(/Enter LocationId/i);
    expect(LocationIdE1).toBeInTheDocument();
  });
  test('LocationName should be rendered', () => {
    render(<Location />);
    const LocationNameE1 = screen.getByPlaceholderText(/Enter LocationName/i);
    expect(LocationNameE1).toBeInTheDocument();
  });
  test('LocationCode should be rendered', () => {
    render(<Location />);
    const LocationCodeE1 = screen.getByPlaceholderText(/Enter LocationCode/i);
    expect(LocationCodeE1).toBeInTheDocument();
  });
  test('LocationCountry should be rendered', () => {
    render(<Location />);
    const LocationCountryE1 = screen.getByPlaceholderText(/Enter Country/i);
    expect(LocationCountryE1).toBeInTheDocument();
  });
  test('LocationAirportName should be rendered', () => {
    render(<Location />);
    const LocationAirportNameE1 = screen.getByPlaceholderText(/Enter AirportName/i);
    expect(LocationAirportNameE1).toBeInTheDocument();
  });