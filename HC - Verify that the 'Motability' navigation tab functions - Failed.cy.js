/**
 * Test Case: Verify that the 'Search All Vehicles' navigation tab functions
 * 
 * Given: The user is on the Holdcroft site
 * When: The user selects the 'Search All Vehicles' navigation tab
 * Then: The user is redirected to the correct URL, the correct title is shown, search filters are displayed, and vehicle cards are visible
 */

describe('Verify that the Motability navigation tab functions', () => {
    it('passes', () => {
      // Visit the page
      cy.visit(Cypress.env('apex_fe_hc_url'))
      .wait(10000)

      // Change the dimensions to a desktop screen size
      cy.viewport(2076, 1438)

      // Accept cookies
      cy.get('#cookiescript_accept').click({force:true})
      .wait(1000)

    // Force the dropdown to appear
    cy.get('.main-nav > :nth-child(5)').invoke('show')
    .wait(2500)

    // Click the option - Motability Offers
    cy.get('.col-12').select('[title="Visit the Holdcroft Servicing page"]')

 
  })
})