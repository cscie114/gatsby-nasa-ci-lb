describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2').contains('Astronomy Picture of the Day');
  })
  it('has a nav link to the archives', () => {
    cy.get('nav').contains('Archives')
  })
}) 
