import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import testCommonLink from '../utils/testCommons';
import MintPage from '../../src/pages/mint';
import * as hooks from '../../src/hooks/useAvailableTokens';

const defaultAvailableTokens = ['1', '2', '3', '999'];
const mockUseAvalailableTokens = ({
  availableTokens = defaultAvailableTokens,
  isFetchingAvailableTokens = false,
} = {}) =>
  jest.spyOn(hooks, 'useAvailableTokens').mockImplementation(() => ({
    availableTokens,
    isFetchingAvailableTokens,
  }));

describe('Token list', () => {
  beforeEach(() => {
    mockUseAvalailableTokens();
  });

  test('loading state', () => {
    mockUseAvalailableTokens({ isFetchingAvailableTokens: [] });
    render(<MintPage />);
    expect(
      screen.getAllByTestId('grid-loading-skeleton')[0],
    ).toBeInTheDocument();
  });

  test('shows tokens', async () => {
    render(<MintPage />);
    await waitFor(() => {
      defaultAvailableTokens.forEach((token) => {
        expect(screen.getByText(token)).toBeInTheDocument();
      });
    });
  });

  test('shows no tokens available', async () => {
    mockUseAvalailableTokens({ availableTokens: [] });
    render(<MintPage />);
    await waitFor(() => {
      expect(screen.getByText('noTokensAvailable')).toBeInTheDocument();
    });
  });

  test('Pick a token and show web3 modal', async () => {
    render(<MintPage />);
    await waitFor(() => {
      defaultAvailableTokens.forEach((token) => {
        expect(screen.getByText(token)).toBeInTheDocument();
      });
    });
    fireEvent.click(screen.getByText('1'));

    await waitFor(() => {
      const ddaoTokenSearch = screen.getByRole('link', {
        name: /here/,
      });

      testCommonLink(ddaoTokenSearch, 'https://developerdao.vercel.app/');
      const connectWalletButton = screen.getByRole('button', {
        name: /connectWalletText/,
      });
      expect(connectWalletButton).toBeInTheDocument();
    });
  });
});

// Mocks

// - Wallet mock

// Tests

// - Expected Negative Interactions

// -- User unsuccessfully connects wallet

// -- Browser does not have web3 support
describe('Browser does not support Web3', () => {
  it('Web3 not defined', () => {
    const originalEthereum = global.window.ethereum;
    render(<MintPage />);
    expect(originalEthereum).toBeUndefined();
  });
});
// -- Insufficient funds

// -- Transaction failed (could not connect)

// -- Token already minted

// -- User Connects Wallet Successfully

// -- User sucessfully starts transacion to mint token

// -- User successfully mints token
