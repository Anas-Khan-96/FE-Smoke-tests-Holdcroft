/**
 * Test Case: Verify that the 'Model' search filters function correctly
 * 
 * Given: The user is on the Holdcroft Vehicle Search Page (VSP)
 * When: The user selects a 'Make' and 'Model' from the search filters and clicks on 'Update Results'
 * Then: The VSP is updated to display only vehicles of the selected make and model
 */

describe('Verify that the \'Model\' search filters function correctly', () => {
  it('passes', () => {
    // Visit the page
    cy.visit(Cypress.env('apex_fe_hc_url'))
    .wait(10000)

    // Change the dimensions to a desktop screen size
    cy.viewport(2076, 1438)
    .wait(2500)

    // Accept cookies
    cy.get('#cookiescript_accept').click({force:true})
    .wait(2500)

    // Select 'Search All Vehicles' navigation tab
    cy.get('.main-nav > :nth-child(2)').click()

    // Expected Outcome: Correct URL is displayed
    cy.url('https://holdcroft.pre.nexuspointdev.co.uk/vehicle-search').should('include', '/vehicle-search')

    // Expected Outcome: 'You are currently searching' title is shown
    cy.get('.sw > .col-12 > p').should('contain', 'You are currently searching')

    // Expected Outcome: Search filters are shown
    cy.get('.hero-search-filter').should('be.visible')

    // Select the 'Make' filter
    cy.get('#make > .for-cursor').click()

    // Select a 'Make'
    cy.get('.filter-btns > :nth-child(3)').click()

    // Select 'Update Results'
    cy.get('.box-ctas > .secondary').click()

    // Select the 'Model' filter
    cy.get('#range > .for-cursor').click()

    // Select a 'Model'
    cy.get('.filter-btns > :nth-child(2)').click()

    // Select 'Update Results'
    cy.get('.box-ctas > .secondary').click()

    // Expected Outcome: The VSP is updated to display only vehicles of the selected make and model
    cy.get('.cars-container').should('be.visible')
    cy.get('#vehicle-card-0 > .content-container > .prices').should('be.visible')
    cy.get('#T12FTY > .make').should('contain', 'Audi A3')
  })
})