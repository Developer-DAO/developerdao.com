import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import testCommonLink from '../utils/testCommons';
import web3Mock from '../mocks/web3';

import MintPage from '@/pages/mint';

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

// - Expected Positive Interactions

// -- When user arrives on page mint button should be disabled, connect wallet should be enabled
describe('Positive Interactions', () => {
  it('Render page default correctly', () => {
    render(<MintPage />);

    const ddaoTokenSearch = screen.getByRole('link', {
      name: /here/,
    });

    testCommonLink(ddaoTokenSearch, 'https://developerdao.vercel.app/');

    const connectWalletButton = screen.getByRole('button', {
      name: /connectWalletText/,
    });

    // - [Button] - Connect Wallet
    expect(connectWalletButton).toBeInTheDocument();
  });
});

// -- User Connects Wallet Successfully

// -- User sucessfully starts transacion to mint token

// -- User successfully mints token
