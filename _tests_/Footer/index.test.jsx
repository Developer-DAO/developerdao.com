import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer/index';

describe('Footer', () => {
  it('Renders the github link', () => {
    render(<Footer />);

    const github = screen.getByTitle('Developer DAO GitHub organization');

    expect(github).toBeInTheDocument();
  });

  it('Renders the icons', () => {
    render(<Footer />);

    const openSea = screen.getByTitle('OpenSea');
    const etherscan = screen.getByTitle('Etherscan');
    const twitter = screen.getByTitle('Twitter');
    const discord = screen.getByTitle('Discord');

    expect(openSea).toBeInTheDocument();
    expect(etherscan).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(discord).toBeInTheDocument();
  });

  it('Renders the Vercel link', () => {
    render(<Footer />);

    const vercel = screen.getByTitle('Vercel');

    expect(vercel).toBeInTheDocument();
  });
});
