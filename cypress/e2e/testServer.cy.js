describe('Test de connexion du serveur', () => {
  it('Vérifier que le serveur est connecté', () => {
    cy.request('http://localhost:3000')
      .its('status')
      .should('equal', 200);
  });
});

describe('test que je reçoit le json de api pokemon', () => {
  it('Vérifier que le serveur est connecté', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/pikachu')
      .its('status')
      .should('equal', 200);
  });
});
// test que json est bien reçu
describe('test que je reçoit le json de api pokemon', () => {
  it('Vérifier que le serveur est connecté', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/pikachu')
      .its('body')
      .should('include', { name: 'pikachu' });
  });
});
