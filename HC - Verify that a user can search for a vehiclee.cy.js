/**
 * Test Case: Verify that a user can search for a vehicle
 * 
 * Given: The user is on the Holdcroft Vehicle Search Page (VSP)
 * When: The user selects a 'Make' and 'Model' from the search filters and clicks on 'Search'
 * Then: The VSP is updated to display only vehicles of the selected make and model
 */

describe('Search for a vehicle', () => {
  it('passes', () => {
    // Visit the page
    cy.visit(Cypress.env('apex_fe_hc_url'))
    .wait(10000)

    // Change the dimensions to a desktop screen size
    cy.viewport(2076, 1438)
    .wait(2500)

    // Accept cookiessss
    cy.get('#cookiescript_accept').click({force:true})
    .wait(2500)

    // Select a 'Make' from the search filters
    cy.get('#make > .for-cursor').click()
    .wait(2500)
    cy.get('.filter-btns > :nth-child(3)').click()
    .wait(2500)

    // Select the 'Model' tab
    cy.get('.menu-tabs > :nth-child(4)').click()
    .wait(2500)

    // Select a 'Model' from the search filters
    cy.get('.filter-btns > :nth-child(2)').click()
    .wait(2500)

    // Click on 'Search'
    cy.get('.box-ctas > .secondary').click()

    // Expected Outcome: Audi A3 is displayed in the vehicle search page
    cy.get('#T12FTY > .make').should('contain', 'Audi A3')
    cy.get('#T12FTY > .image-container > a > img').should('be.visible')
    cy.get('#vehicle-card-0 > .content-container > .prices').should('be.visible')
  })
})