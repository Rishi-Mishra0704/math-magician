import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders homepage by default', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders calculator page when clicked on the link', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders quotes page when clicked on the link', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByText('Quotes'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
