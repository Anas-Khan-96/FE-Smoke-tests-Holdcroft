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

    //Enter a Reg
    cy.get('#vrm').type('LS21EJG')

    // Enter current mileage
    cy.get('#mileage').type('20000')

    //Select Value my car
    cy.get('.global-form > .secondary').click()

    // Expected Outcome: The correct title is shown in Step 1
    cy.get('h1').should('contain', 'Is this your vehicle?')

    //Expected Outcome: The correct vehicle details are shown
    cy.get('.valuation-vehicle-info').should('contain', 'LS21EJG')
    cy.get('.valuation-vehicle-info').should('contain', '2021 Audi A3')
    cy.get('.valuation-vehicle-info').should('contain', '35 TFSI Vorsprung 5dr S')
    cy.get('.valuation-vehicle-info').should('contain', 'Tronic')

    // Select Excellent Condition
    cy.get(':nth-child(1) > .valuation-condition-row > .valuation-condition-input').click()

    // Select 'Yes, this is my vehicle' button
    cy.get('.cta > .secondary').click()

    // Expected Outcome: The correct title is shown in Step 2
    cy.get('.valuation-about-form > :nth-child(1)').should('contain', 'Tell us about you')
    cy.get('.global-form > h1').should('contain', 'Tell us about your next car')

    // Select title
    cy.get('#title').select('Mr')

    // Enter first name
    cy.get('#name').type('Smoke')

    // Enter last name
    cy.get('#surname').type('Test')

    // Enter email
    cy.get('#email').type('npsmoketest@hotmail.com')

    // Enter contact number
    cy.get('#telephone').type('07799000000')

    // Postcode
    cy.get('#postcode').type('ID1 1QD')

    // Select option from 'What type of car are you looking for?'
    cy.get('#interested_type').select('New')

    // Select option from 'Is there a particluar manufacturer you're interested in?'
    cy.get('#interested_make').select('Honda')

    // Select option from 'Your preferred location'
    cy.get('#dealership').select('Honda Cobridge')

    // Select option from 'Marketing preferences'
    cy.get('#pref_email').click()

    // Click on 'Get valuation'
    cy.get('.cta > .secondary').click()

    // Expected Outcome: The correct title is shown in Step 3
    cy.get('h1').should('contain', 'Thank you for your valuation enquiry')
    cy.get('.valuation-next-steps > :nth-child(2)').should('contain', 'Thank you for your valuation enquiry. We’ve sent an email to the email address you provided. Please click the link in the email to get your valuation')

    // Navigated to MailTrap
    cy.visit('https://mailtrap.io/signin')
    .wait(10000)

    // Enter email
    cy.get('#user_email').type('shadab.yousif@nexuspoint.co.uk')

    // Click Next
    cy.get('.login_next_button').click()

    // Enter password
    cy.get('#user_password').type('Slimshady123!')

    // Click Log In
    cy.get('.login_password > :nth-child(3) > .button').click()

    .wait(2500)

    // Click on Inboxes
    cy.get('.p1r2clvp').click()

    // Click on Apex
    cy.get('[data-test-id="inbox_table_row_default_mode_309626"] > :nth-child(1) > :nth-child(1) > .inbox_link > .inbox_name').click()

    // Click on the email
    cy.get(':nth-child(1) > .i18m0o91').click()

    //Expected Outcome: The correct title is shown
    cy.get('.se3o077').should('contain', 'Your Valuation for LS21EJG')

    // Expected Outcome: Valuation message is recevied
    cy.get('.i6jjn6').should('be.visible')

})
})