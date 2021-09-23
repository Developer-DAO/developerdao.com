import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../src/pages/index';
import {
  OPENSEA_DIRECT_LINK_PREFIX,
  ETHER_SCAN_LINK_PREFIX,
  SITE_URL,
} from '../../src/utils/DeveloperDaoConstants';
import { ownedDeveloperNFT, unownedDeveloperNFT } from '../mocks/DeveloperNFT';

const useRouter = jest
  .spyOn(require('next/router'), 'useRouter')
  .mockImplementation(() => ({
    replace: jest.fn(),
  }));

describe('App loads with successful searchs', () => {
  it('Updates search field and loads', async () => {
    jest.spyOn(require('use-nft'), 'useNft').mockImplementation(() => ({
      status: 'loading',
      loading: true,
      error: undefined,
      nft: undefined,
      reload: jest.fn(),
    }));

    render(<App />);

    const searchLabel = screen.getByPlaceholderText('Search developer id');

    fireEvent.change(searchLabel, { target: { value: '2' } });

    expect(searchLabel.value).toBe('2');
    expect(searchLabel).toBeInTheDocument();

    const loading = screen.getByText('loading');
    expect(loading).toBeInTheDocument();
  });

  it('Searchs and loads NFT with owner', async () => {
    jest.spyOn(require('use-nft'), 'useNft').mockImplementation(() => ({
      status: 'done',
      loading: false,
      error: undefined,
      nft: ownedDeveloperNFT,
      reload: jest.fn(),
    }));

    render(<App />);

    const searchLabel = screen.getByPlaceholderText('Search developer id');

    fireEvent.change(searchLabel, { target: { value: '2669' } });

    expect(searchLabel.value).toBe('2669');
    expect(searchLabel).toBeInTheDocument();

    const nftImage = screen.getByAltText(/developerTraits/);
    const openSeaDirectLink = screen.getByRole('link', {
      name: /viewNftOpenSea/,
    });
    const etherScanDirectLink = screen.getByRole('link', {
      name: /viewOwnerEtherscan/,
    });
    const copyLinkToNft = screen.getByText('copyLinkToNFT');

    expect(nftImage).toBeInTheDocument();
    expect(nftImage.src).toBe(ownedDeveloperNFT.image);

    expect(openSeaDirectLink).toHaveAttribute(
      'href',
      `${OPENSEA_DIRECT_LINK_PREFIX}/2669`,
    );
    expect(openSeaDirectLink).toBeEnabled();

    expect(etherScanDirectLink).toHaveAttribute(
      'href',
      `${ETHER_SCAN_LINK_PREFIX}/${ownedDeveloperNFT.owner}`,
    );
    expect(etherScanDirectLink).toBeEnabled();

    expect(copyLinkToNft).toBeInTheDocument();
  });

  it('loads NFT with owner and copies link', async () => {
    const mockedCopiedText = `${SITE_URL}/?id=2669`;

    Object.assign(navigator, {
      clipboard: {
        writeText: () => {
          return mockedCopiedText;
        },
      },
    });

    jest.spyOn(navigator.clipboard, 'writeText');

    jest.spyOn(require('use-nft'), 'useNft').mockImplementation(() => ({
      status: 'done',
      loading: false,
      error: undefined,
      nft: ownedDeveloperNFT,
      reload: jest.fn(),
    }));

    render(<App />);

    const searchLabel = screen.getByPlaceholderText('Search developer id');

    fireEvent.change(searchLabel, { target: { value: '2669' } });

    const copyLinkToNft = screen.getByText('copyLinkToNFT');

    fireEvent.click(copyLinkToNft);

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      mockedCopiedText,
    );
  });

  it('Searchs and loads NFT without owner', async () => {
    jest.spyOn(require('use-nft'), 'useNft').mockImplementation(() => ({
      status: 'done',
      loading: false,
      error: undefined,
      nft: unownedDeveloperNFT,
      reload: jest.fn(),
    }));

    render(<App />);

    const searchLabel = screen.getByPlaceholderText('Search developer id');

    fireEvent.change(searchLabel, { target: { value: '7899' } });

    expect(searchLabel.value).toBe('7899');
    expect(searchLabel).toBeInTheDocument();

    const nftImage = screen.getByRole('img', { name: /developerTraits/ });
    const devNameButton = screen.getByText(`${unownedDeveloperNFT.name}`);
    const etherScanButton = screen.getByText('owner: unclaimed');

    expect(nftImage).toBeInTheDocument();
    expect(nftImage.src).toBe(unownedDeveloperNFT.image);

    expect(devNameButton).toBeDisabled();
    expect(etherScanButton).toBeDisabled();
  });
});

describe('App loads with errors on searches', () => {
  it('Errors out on retrieving NFT', async () => {
    jest.spyOn(require('use-nft'), 'useNft').mockImplementation(() => ({
      status: 'error',
      loading: false,
      error: { name: 'error', message: 'error' },
      nft: undefined,
      reload: jest.fn(),
    }));

    const { container } = render(<App />);

    const errorLabel = screen.getByText('error.');
    expect(errorLabel).toBeInTheDocument();
  });
});
