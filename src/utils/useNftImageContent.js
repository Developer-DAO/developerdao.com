import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useNftImageContent = (imgStr) => {
  const { t } = useTranslation();

  return useMemo(() => {
    if (!imgStr) {
      return [];
    }

    const [nftImage, decodedAltText] = processNftImageContent(imgStr);

    const developerTraits = t('developerTraits');
    const developerAltText = decodedAltText ?? t('failedLoadTraits');
    const nftAltText = `${developerTraits}: ${developerAltText}`;

    return [nftImage, nftAltText];
  }, [imgStr, t]);
};

const processNftImageContent = (imgStr) => {
  if (typeof imgStr !== 'string') {
    throw new Error(
      'processNftImageContent: invalid input image, must be a string',
    );
  }

  const [formatInfo, base64Str] = imgStr.split(',');

  // The smart contract includes items with unescaped "&", which breaks SVG rendering
  const svgCode = atob(base64Str);
  const processedStr = svgCode.replace(' & ', ' &amp; ');

  const nftImage = formatInfo + ',' + btoa(processedStr);
  const nftAltText = getNftAltText(svgCode);

  return [nftImage, nftAltText];
};

const getNftAltText = (svgCode) => {
  const template = document.createElement('template');
  template.innerHTML = svgCode;

  const [svgNode] = template.content.childNodes;
  if (!svgNode) {
    return null;
  }

  // extract all developer traits from the svg text
  const textNodes = Array.from(svgNode.querySelectorAll('text'));

  // return a list of developer traits separated by commas
  const nftTraits = textNodes.map((node) => node.textContent).join(', ');

  return nftTraits;
};
