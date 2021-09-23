/// <reference types="cypress" />

describe('NFT Search', () => {
  it('Shows first token when loading, can search for another token', () => {
    cy.visit('/');

    // display NFT of first token
    cy.findDeveloperNft(
      'macOS, Brackets, White Tanktop, Scala, Government, Kisumu, Divergent, JonGold',
    ).should('exist');

    // search for another token and display NFT
    cy.findByRole('textbox', { name: /search/i })
      .clear()
      .type('5555');
    cy.location('search').should('eq', '?id=5555');
    cy.findDeveloperNft(
      'Kali Linux, Brackets, Patagonia Vest, ArnoldC, Environmental, Bucharest, Anarchist, Cosmic',
    ).should('exist');
  });

  it('Shows NFT for token from the url', () => {
    cy.visit('/?id=200');
    cy.findDeveloperNft(
      'Linux Mint, Coda, Bubble Gum Wrapper, Whitespace, Farming, Kisumu, Analytical, Kind',
    ).should('exist');
  });
});
