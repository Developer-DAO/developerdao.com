import { renderHook } from '@testing-library/react-hooks';

import { useNftImageContent } from '../../src/utils/useNftImageContent';
import { ownedDeveloperNFT } from '../mocks/DeveloperNFT';

describe('useNftImageContent', () => {
  it('Generates NFT alt text from input image', () => {
    const { result } = renderHook(() =>
      useNftImageContent(ownedDeveloperNFT.image),
    );
    const [, altText] = result.current;
    expect(altText).toBe(
      'developerTraits: Google Chrome OS, Sublime Text, Black Hoodie, Julia, Undercover, Pyongyang, Anarchist, JonGold',
    );
  });
});
