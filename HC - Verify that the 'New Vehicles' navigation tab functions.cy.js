/**
 * Test Case: Verify that the 'New Vehicles' navigation links function
 * 
 * Given: The user is on the Holdcroft site
 * When: The user selects the 'New Vehicles' dropdown
 * Then: The user is redirected to the correct URL and all the new vehicle options are shown
 */

describe('Verify that the New Vehicles navigation links function', () => {
    it('passes', () => {
      // Visit the page
      cy.visit(Cypress.env('apex_fe_hc_url'))
      .wait(10000)

      // Change the dimensions to a desktop screen size
      cy.viewport(2076, 1438)

      // Accept cookies
      cy.get('#cookiescript_accept').click({force:true})
      .wait(1000)

      // Select 'New Vehicles' dropdown
      cy.get('.main-nav > :nth-child(1)').click()

      // Expected Outcome: Correct URL is displayed
      cy.url('https://holdcroft.pre.nexuspointdev.co.uk/new-cars').should('include', '/new-cars')

      // Expected Outcome: All of the new vehicle options are shown
      cy.get('.mg, .dacia, .renault, .nissan, .honda, .volvo, .mazda, .hyundai, .alpine, .gwmora, .genesis').should('be.visible')
  })
})