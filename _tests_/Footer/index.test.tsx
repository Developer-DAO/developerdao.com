import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/common';

describe('Footer', () => {
  it('Renders the icons', () => {
    render(<Footer />);

    const openSea = screen.getByTitle('OpenSea');
    const etherscan = screen.getByTitle('Etherscan');
    const twitter = screen.getByTitle('Twitter');
    const discord = screen.getByTitle('Discord');
    const github = screen.getByTitle('GitHub');
    const discourse = screen.getByTitle('Discourse');

    expect(openSea).toBeInTheDocument();
    expect(etherscan).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(discord).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(discourse).toBeInTheDocument();
  });

  it('Renders the Vercel link', () => {
    render(<Footer />);

    const vercel = screen.getByTitle('Vercel');

    expect(vercel).toBeInTheDocument();
  });
});
