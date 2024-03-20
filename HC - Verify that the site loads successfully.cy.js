/**
 * Test Case: Verify the site loads correctly
 * 
 * Given: The user is on the Holdcroft VSP
 * When: The user navigates to the VSP
 * Then: The site loads correctly
 */

describe('Site loads correctly', () => {
    it('Verify the site loads correctly', () => {

        // Navigate to Holdcroft Homepage
        cy.visit(Cypress.env('apex_fe_hc_url'))
        .wait(10000)

        //Change the dimensions to a desktop screen size
        cy.viewport(2076, 1438)
        .wait(2500)

        // Accept cookies
        cy.get('#cookiescript_accept').click()

        // Expected Outcome: The site loads correctly
        // Check that key elements are present and visible on the Homepage
        cy.get('.bottom-block').should('be.visible');
        cy.get('.text-ticker > div > :nth-child(3)').should('be.visible');
        cy.get('.one-container > h1').should('contain', 'Welcome to Holdcroft.');
        cy.get('.one-container > p').should('be.visible');
        cy.get('.main-filter').should('be.visible');
        cy.get('#js-widget-button').should('be.visible');
        cy.get('.tile-holder > .sw').should('be.visible');
        cy.get('.new-heading').should('contain', 'Browse by brand');
        cy.get('.cards > span').should('be.visible');
        cy.get(':nth-child(3) > .sw').should('be.visible');
        cy.get('.car-value > article.sw > h1').should('contain', 'Find out what your current car is worth');
        cy.get('article.sw > p').should('contain', 'Interested in a part exchange deal? Enter your registration to get your free valuation.');
        cy.get('.valuation-banner').should('be.visible');
        cy.get('.car-carousel-v2 > .sw > :nth-child(1)').should('contain', 'Featured offers from across the Holdcroft group');
        cy.get('.car-carousel-v2 > .sw').should('be.visible');
        cy.get('.cta-banner > .text-container').should('be.visible');
        cy.get('.judge-wrapper').should('be.visible');
        cy.get('.social-wrapper').should('be.visible');
        cy.get('.map-section').should('be.visible');
        cy.get('.customer-promise').should('be.visible');
        cy.get('.site-footer > :nth-child(1)').should('be.visible');
        cy.get('.bottom').should('be.visible');


    }); 
}); 
