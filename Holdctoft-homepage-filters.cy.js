describe('Vehicle search from the homepage', () => {
    it('Verify the user can search for vehicles from the homepage', () => {
//navigate to the HC Page
cy.visit('https://holdcroft.pre.nexuspointdev.co.uk')
.wait(2000)

//accept cookies
cy.get('#cookiescript_accept').click()

//Click the make button
cy.get('#make > .for-cursor').click()
//Select Honda as the make
cy.get('.filter-btns > :nth-child(13)').click()
//select the model tab from the modal
cy.get('.menu-tabs > :nth-child(4)').click()
//Select Civic model from the list
cy.get('.filter-btns > .range-list-filter').contains('Civic').click();

//Click the search button
cy.get('.box-ctas > .secondary').click()
.wait(3000)

//assert the filters are visible on the search page
cy.get('.col-12 > .site').should('contain', 'Honda') //make filter
cy.get('.col-12 > :nth-child(3)').should('contain', 'Civic') //model filter

cy.get('#vehicle-card-0 > .content-container > .classification-tags').should('be.visible')
cy.get('#DE16WZV > .make').should('contain', 'Honda Civic')


}) 
    })

