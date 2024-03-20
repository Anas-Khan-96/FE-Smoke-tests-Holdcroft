/**
 * Test Case: Verify that the 'Search All Vehicles' navigation tab functions
 * 
 * Given: The user is on the Holdcroft site
 * When: The user selects the 'Search All Vehicles' navigation tab
 * Then: The user is redirected to the correct URL, the correct title is shown, search filters are displayed, and vehicle cards are visible
 */

describe('Verify that the Search All Vehicles navigation tab functions', () => {
    it('passes', () => {
      // Visit the page
      cy.visit(Cypress.env('apex_fe_hc_url'))
      .wait(10000)

      // Change the dimensions to a desktop screen size
      cy.viewport(2076, 1438)

      // Accept cookies
      cy.get('#cookiescript_accept').click({force:true})
      .wait(1000)

      // Select 'Search All Vehicles' navigation tab
      cy.get('.main-nav > :nth-child(2)').click()

      // Expected Outcome: Correct URL is displayed
      cy.url('https://holdcroft.pre.nexuspointdev.co.uk/vehicle-search').should('include', '/vehicle-search')

      // Expected Outcome: 'You are currently searching' title is shown
      cy.get('.sw > .col-12 > p').should('contain', 'You are currently searching')

      // Expected Outcome: Search filters are shown
      cy.get('.hero-search-filter').should('be.visible')

      // Expected Outcome: Vehicle cards are displayed
      cy.get('.cars-container').should('be.visible')
  })
})