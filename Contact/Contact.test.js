import {render , screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Contact from "./Contact";

test('Customerid should be rendered', () => {
    render(<Contact />);
    const customerIdEl = screen.getByTestId(/CustomerId/i);
    expect(customerIdEl).toBeInTheDocument();
  });

  test('address should be rendered', () => {
    render(<Contact />);
    const addressEl = screen.getByTestId(/Address/i);
    expect(addressEl).toBeInTheDocument();
  });

  test('city should be rendered', () => {
    render(<Contact />);
    const cityEl = screen.getByTestId(/City/i);
    expect(cityEl).toBeInTheDocument();
  });

  test('country should be rendered', () => {
    render(<Contact />);
    const countryEl = screen.getByTestId(/Country/i);
    expect(countryEl).toBeInTheDocument();
  });

  test('update should be rendered', () => {
    render(<Contact />);
    const updateEl = screen.getByTestId(/update/i);
    expect(updateEl).toBeInTheDocument();
  });