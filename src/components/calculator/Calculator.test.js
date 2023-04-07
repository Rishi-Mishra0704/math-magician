import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator component', () => {
  test('clicking 1 and 2 should display 12', () => {
    const { container, getByText } = render(<Calculator />);
    const oneButton = getByText('1');
    const twoButton = getByText('2');
    const display = container.querySelector('.display');
    fireEvent.click(oneButton);
    fireEvent.click(twoButton);
    expect(display.textContent).toBe('12');
  });
});
