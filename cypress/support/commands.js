Cypress.Commands.add('findDeveloperNft', (traits = '') => {
  cy.findByRole('img', {
    name: new RegExp(traits),
  });
});
