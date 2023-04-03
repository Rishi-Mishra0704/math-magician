import React from 'react';
import { render, act } from '@testing-library/react';
import Quote from './quotes';

describe('Quote', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([{ quote: 'test quote' }]),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render loading text', () => {
    act(() => {
      const { asFragment } = render(<Quote />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should render error text when fetching quote fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to fetch quote.'));
    act(() => {
      const { asFragment } = render(<Quote />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should render quote text when fetching quote succeeds', async () => {
    act(() => {
      const { asFragment } = render(<Quote />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
