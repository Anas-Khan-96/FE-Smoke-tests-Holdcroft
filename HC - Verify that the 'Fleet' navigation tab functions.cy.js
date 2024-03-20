/**
 * Test Case: Verify that the 'Electric Cars' navigation tab functions
 * 
 * Given: The user is on the Holdcroft site
 * When: The user selects the 'Electric Cars' navigation tab
 * Then: The user is redirected to the correct URL, the correct title is shown, and the types of electric vehicles table is displayed
 */

describe('Verify that the Fleet navigation tab functions', () => {
    it('passes', () => {
      // Visit the page
      cy.visit(Cypress.env('apex_fe_hc_url'))
      .wait(10000)

      // Change the dimensions to a desktop screen size
      cy.viewport(2076, 1438)

      // Accept cookies
      cy.get('#cookiescript_accept').click({force:true})
      .wait(1000)

      // Select 'Fleet' navigation tab
      cy.get('.main-nav > :nth-child(7)').click()

      // Expected Outcome: Correct URL is displayed
      cy.url('https://holdcroft.pre.nexuspointdev.co.uk/fleet').should('include', '/fleet')

      // Expected Outcome: The correct title is shown - Business and Fleet Centre
      cy.get('.content > h1').should('contain', 'Business and Fleet Centre')

      // Expected Outcome: The naviagtion is displayed
      cy.get('.internal-sticky-page-nav').should('be.visible')

      // Expected Outcome: 'Browse manufacturer offers here' title is displayed
      cy.get('#manufactuer-approved > .sw > h1').should('contain', 'Browse manufacturer offers here')

      // Expected Outcome: Different manufacturer logos options are displayed
      cy.get('.manu-fleet-container').should('be.visible')
  })
})