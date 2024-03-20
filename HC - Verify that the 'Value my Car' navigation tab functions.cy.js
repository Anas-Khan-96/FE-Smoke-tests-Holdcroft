/**
 * Test Case: Verify that the 'Search All Vehicles' navigation tab functions
 * 
 * Given: The user is on the Holdcroft site
 * When: The user selects the 'Search All Vehicles' navigation tab
 * Then: The user is redirected to the correct URL, the correct title is shown, search filters are displayed, and vehicle cards are visible
 */

describe('Verify that the Value my Car navigation tab functions', () => {
  it('passes', () => {
    // Visit the page
    cy.visit(Cypress.env('apex_fe_hc_url'))
    .wait(10000)

    // Change the dimensions to a desktop screen size
    cy.viewport(2076, 1438)

    // Accept cookies
    cy.get('#cookiescript_accept').click({force:true})
    .wait(1000)

    // Select 'Value my Car' navigation tab
    cy.get('.main-nav > :nth-child(4)').click()
    .wait(2500)

    // Expected Outcome: Correct URL is displayed
    cy.url('https://holdcroft.pre.nexuspointdev.co.uk/car-valuation').should('include', '/car-valuation')
    .wait(2500)

    // Expected Outcome: 'Find out what your car is worth!' title is shown
    cy.get('h1').should('contain', 'Find out what your car is worth!')
    .wait(2500)
    
    // Expected Outcome: Car information section is displayed
    cy.get('.car-info').should('be.visible')
})
})