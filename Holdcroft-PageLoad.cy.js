describe('Homepage Test', () => {
    it('Verify the homepage loads correctly', () => {
//navigate to the HC Page
cy.visit(Cypress.env('apex_fe_hc_url'))
.wait(2000);

//accept cookies
cy.get('#cookiescript_accept').click()

//Expected outcome: Verify that all elements are shown on the Homepage
cy.get('.one-container > h1').should('contain', 'Welcome to Holdcroft.')
//Assert the main search filters are visible
cy.get('.main-filter').should('be.visible')

    }) 
})







