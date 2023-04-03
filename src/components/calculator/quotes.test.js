import React from 'react';
import {
  render, waitFor, act, screen,
} from '@testing-library/react';
import Quote from './quotes';
import '@testing-library/jest-dom/extend-expect';

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
      render(<Quote />);
    });
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('should render error text when fetching quote fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to fetch quote.'));
    act(() => {
      render(<Quote />);
    });
    await waitFor(() => expect(screen.getByText(/Failed to fetch quote/i)).toBeInTheDocument());
  });

  it('should render quote text when fetching quote succeeds', async () => {
    act(() => {
      render(<Quote />);
    });
    await waitFor(() => expect(screen.getByText(/test quote/i)).toBeInTheDocument());
  });
});
