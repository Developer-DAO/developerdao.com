import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DevName from '../../../src/components/Search/Dev/DevName';
import { OPENSEA_DIRECT_LINK_PREFIX } from '../../../src/utils/DeveloperDaoConstants';
import testCommonLink from '../../utils/testCommons';
import {
  ownedDeveloperNFT,
  unownedDeveloperNFT,
} from '../../mocks/DeveloperNFT';

describe('Dev Name button with Owner', () => {
  it('Renders the button with link', () => {
    render(<DevName nft={ownedDeveloperNFT} developerId={'2669'} />);

    const devName = screen.getByRole('link', { name: 'viewNftOpenSea' });
    expect(devName).toBeInTheDocument();
    expect(devName).toHaveTextContent(ownedDeveloperNFT.name);

    fireEvent.click(devName);

    testCommonLink(devName, `${OPENSEA_DIRECT_LINK_PREFIX}/2669`);
    expect(devName).toBeEnabled();
  });
});

describe('Dev Name button without Owner', () => {
  it('Renders the button with no link', () => {
    render(<DevName nft={unownedDeveloperNFT} developerId={'7899'} />);

    const devName = screen.getByRole('button', {
      name: unownedDeveloperNFT.name,
    });
    expect(devName).toBeInTheDocument();
    expect(devName).toBeDisabled();
  });
});
