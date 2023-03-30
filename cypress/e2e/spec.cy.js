describe('Test de connexion du serveur', () => {
  it('Vérifier que le serveur est connecté', () => {
    cy.request('http://localhost:3000')
      .its('status')
      .should('equal', 200);
  });
});
