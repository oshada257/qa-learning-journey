describe('Negative Login Test', () => {

    it('should show an error for invalid password', () => {

        // 1. Open the website
        cy.visit('https://www.saucedemo.com/')

        // 2. Enter valid username
        cy.get('[data-test="username"]')
            .type('standard_user')

        // 3. Enter invalid password
        cy.get('[data-test="password"]')
            .type('wrong_password')

        // 4. Click Login
        cy.get('[data-test="login-button"]')
            .click()

        // 5. Verify error message
        cy.get('[data-test="error"]')
            .should('be.visible')

    })

})

