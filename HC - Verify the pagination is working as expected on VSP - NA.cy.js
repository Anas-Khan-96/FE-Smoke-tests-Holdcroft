/**
 * Test Case: Verify the pagination is working as expected on Vehicle Search Page (VSP)
 * 
 * Given: The user is on the Holdcroft VSP
 * When: The user navigates through the vehicle images using the next and previous arrows
 * Then: The images are displayed correctly and there are no empty pages
 */

describe('Verify the pagination is working as expected on VSP', () => {
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

    // Expected Outcome: Vehicle cards are displayed
    cy.get('.cars-container').should('be.visible')

    // Select next arrow on the image

    // Expected Outcome: The images are displayed

    // Select previous arrow on the image

    // Expected Outcome: The images are displayed

    // Expected Outcome: There are no empty pages

    // Note: unable to test as there are no images on Pre
  })
})