/**
 * Test Case: Verify that the 'Electric Cars' navigation tab functions
 * 
 * Given: The user is on the Holdcroft site
 * When: The user selects the 'Electric Cars' navigation tab
 * Then: The user is redirected to the correct URL, the correct title is shown, and the types of electric vehicles table is displayed
 */

describe('Verify that the Electric Cars navigation tab functions', () => {
    it('passes', () => {
      // Visit the page
      cy.visit(Cypress.env('apex_fe_hc_url'))
      .wait(10000)

      // Change the dimensions to a desktop screen size
      cy.viewport(2076, 1438)

      // Accept cookies
      cy.get('#cookiescript_accept').click({force:true})
      .wait(1000)

      // Select 'Electric Cars' navigation tab
      cy.get('.main-nav > :nth-child(3)').click()

      // Expected Outcome: Correct URL is displayed
      cy.url('https://holdcroft.pre.nexuspointdev.co.uk/electric-and-hybrid-cars').should('include', '/electric-and-hybrid-cars')

      // Expected Outcome: The correct title is shown - Electric and Hybrid Cars
      cy.get('.header-content > :nth-child(1) > h1').should('contain', 'Electric and Hybrid Cars')

      // Expected Outcome: Types of electric vehicles table is displayed
      cy.get('.table-outer').should('be.visible')
  })
})