// https://on.cypress.io/api

describe('Render website', () => {
  it('visits the app root url / the website', () => {
    cy.visit('/')
    // cy.visit('http://localhost:5173')
    cy.contains('h1', 'You did it!')
  })
  it('checks status code', () => {
    cy.request('/').then((Response) => {
      expect(Response.status).to.eq(200)
    })
  })
  it('navigate to about page', () => {
    cy.visit('/')
    cy.get('a').contains('About').click()
      
    })
})
