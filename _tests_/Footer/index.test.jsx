import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer/index';
import NewFooter from '../../src/components/NewFooter/index';

describe('Footer', () => {
  it('Renders the social icons on the new Footer component', () => {
    console.log('lol testing');
    render(<NewFooter />);

    const openSea = screen.getByLabelText('OpenSea');
    const twitter = screen.getByLabelText('Twitter');
    const discord = screen.getByLabelText('Discord');
    const github = screen.getByLabelText('GitHub');

    expect(openSea).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(discord).toBeInTheDocument();
    expect(github).toBeInTheDocument();
  });

  // TODO: deprecate the old Footer component, it is no longer used
  it('Renders the icons on the old Footer component', () => {
    render(<Footer />);

    const openSea = screen.getByTitle('OpenSea');
    const etherscan = screen.getByTitle('Etherscan');
    const twitter = screen.getByTitle('Twitter');
    const discord = screen.getByTitle('Discord');
    const github = screen.getByTitle('GitHub');

    expect(openSea).toBeInTheDocument();
    expect(etherscan).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(discord).toBeInTheDocument();
    expect(github).toBeInTheDocument();
  });

  it('Renders the Vercel link', () => {
    render(<Footer />);

    const vercel = screen.getByTitle('Vercel');

    expect(vercel).toBeInTheDocument();
  });
});
