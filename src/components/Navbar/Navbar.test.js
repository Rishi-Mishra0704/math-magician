import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar component', () => {
  test('renders Math Magician header', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders HomePage link', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders Calculator link', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders Quotes link', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
