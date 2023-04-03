import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';

test('renders Math Magician header', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const headerElement = getByText(/Math Magician/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders HomePage link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const homePageLinkElement = getByText(/HomePage/i);
  expect(homePageLinkElement).toBeInTheDocument();
});

test('renders Calculator link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const calculatorLinkElement = getByText(/Calculator/i);
  expect(calculatorLinkElement).toBeInTheDocument();
});

test('renders Quotes link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const quotesLinkElement = getByText(/Quotes/i);
  expect(quotesLinkElement).toBeInTheDocument();
});
