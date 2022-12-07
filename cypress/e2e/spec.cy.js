describe('Soot Oatmeal browser tests', () => {
  it('visits the page', () => {
    cy.visit('https://quargsgreene.github.io/soot-oatmeal/');
  });

  it('plays a short motif', () => {
    cy.wait(10000);
    cy.get('.tone-generator').click({ force: true });
  });
});
