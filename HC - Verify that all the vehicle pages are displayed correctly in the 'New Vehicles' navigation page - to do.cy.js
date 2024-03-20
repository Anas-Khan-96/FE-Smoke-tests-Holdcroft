describe('empty spec', () => {
    it('passes', () => {
      // Visit the page
      cy.visit(Cypress.env('apex_fe_hc_url'))
      .wait(10000)

      //Change the dimensions to a desktop screen size
      cy.viewport(2076, 1438)

      // This accepts cookies
      cy.get('#cookiescript_accept').click({force:true})
      .wait(1000)

      // Select New Vehicles dropdown
      cy.get('.main-nav > :nth-child(1)').click()

      // Expected outocme: All the new vehicle options are shown
      cy.get('.mg').should('be.visible')
      cy.get('.dacia').should('be.visible')
      cy.get('.renault').should('be.visible')
      cy.get('.nissan').should('be.visible')
      cy.get('.honda').should('be.visible')
      cy.get('.volvo').should('be.visible')
      cy.get('.mazda').should('be.visible')
      cy.get('.hyundai').should('be.visible')
      cy.get('.alpine').should('be.visible')
      cy.get('.gwmora').should('be.visible')
      cy.get('.genesis').should('be.visible')

      .wait(2500)
      // Select MG
      cy.get('.mg').click()
 
      // Expected Outcome: MG page is displayed
      cy.url('https://holdcroft.pre.nexuspointdev.co.uk/mg').should('include', '/mg')

      // Epxetc Outcome: The MG logo is shown
      cy.get('.content-logo').should('be.visible')

      //Expcetd Oucome: The correct title is shown
      cy.get('.title > :nth-child(2) > :nth-child(1)').should('contain', 'MG at Holdcroft')



      // // Select New Vehicles dropdown
      // cy.get('.main-nav > :nth-child(1)').click()

      // .wait(2500)
      // // Select Dacia
      // cy.get('.dacia > .ctas > .secondary').click()
 
      // // Expected Outcome: Dacia page is displayed
      // cy.url('https://holdcroft.pre.nexuspointdev.co.uk/dacia').should('include', '/dacia')

      // // Epxetc Outcome: The Dacia logo is shown
      // cy.get('.content-logo').should('be.visible')

      // //Expcetd Oucome: The correct title is shown
      // cy.get('.title > :nth-child(2) > :nth-child(1)').should('contain', 'Dacia at Holdcroft')



      // // Select New Vehicles dropdown
      // cy.get('.main-nav > :nth-child(1)').click()

      // .wait(2500)
      // // Select Renault
      // cy.get('.renault > .ctas > .secondary').click()
 
      // // Expected Outcome: Renault page is displayed
      // cy.url('https://holdcroft.pre.nexuspointdev.co.uk/renault').should('include', '/renault')

      // // Epxetc Outcome: The Renault logo is shown
      // cy.get('.content-logo').should('be.visible')

      // //Expcetd Oucome: The correct title is shown
      // cy.get('.title > :nth-child(2) > :nth-child(1)').should('contain', 'Renault at Holdcroft')
      

  })
})