// Given: user access VDP 
// When: user submits vehicle enquiry
//Then: enquiry is successfully submitted


describe('Vehicle enquiry from VDP', () => {
    it('Verify the user can submit an enquiry on a vehicle', () => {
        // Navigate to the HC Page
        cy.visit(Cypress.env('apex_fe_hc_url'))
            .wait(2000);

        // Accept cookies
        cy.get('#cookiescript_accept').click();

        // Click the make button
        cy.get('#make > .for-cursor').click();

        // Select Audi as the make
        cy.wait(1000)
            .get('.filter-btns > :nth-child(3)').contains('Audi').click();

        // Click the search button
        cy.get('.box-ctas > .secondary').click()
            .wait(2000);

        // Assert the filters are visible on the search page
        cy.get('.col-12 > .site').should('contain', 'Audi'); //make filter

        cy.get('#vehicle-card-0 > .content-container > .classification-tags').should('be.visible');

        // Select the first vehicle from the list
        cy.get('#CX17NWM > .make').click();

        // Click on the enquiry button
        cy.get('.no-style > .icon-wrapper').click();

        // Enter first name
        cy.get('.flex > :nth-child(1) > .input').type('Smoke');

        // Enter Surname
        cy.get(':nth-child(2) > .input').type('Test');

        // Enter email address
        cy.get(':nth-child(4) > .input').type('npsmoketest@nexuspoint.co.uk');

        // Enter Phone number
        cy.get(':nth-child(5) > .input').type('07799000000');

        // Select enquiry type
        cy.get('#enquiry_type').select('General Enquiry');

        // Add message
        cy.get('#message').type('This is a test from Nexus Point, please ignore');

        // Check the t&c
        cy.get(':nth-child(8) > .check-box > .label > .tick').click();

        // Check email from the marketing preferences
        cy.get(':nth-child(2) > .label > .tick').click();

        // Send enquiry
        cy.get('.primary').click();

        // Assert form has been submitted
        cy.get('h1.col-12').should('be.visible');
        cy.get('h1.col-12').should('contain', 'Thank you for your Enquiry');
        cy.get('div.col-12 > p').should('contain', 'We have received your enquiry and our team will be in contact with you shortly');
    });
});
