describe('Login Test Suite', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // TC01 - Valid Login
    it('TC01 - should login successfully with valid credentials', () => {
        cy.login('standard_user', 'secret_sauce')

        cy.url()
            .should('include', '/inventory.html')
        cy.get('.title')
            .should('have.text', 'Products')
    })

    // TC02 - Invalid Password
    it('TC02 - should show error for invalid password', () => {
        cy.get('[data-test="username"]')
            .type('standard_user')
        cy.get('[data-test="password"]')
            .type('wrong_password')
        cy.get('[data-test="login-button"]')
            .click()

        cy.get('[data-test="error"]')
            .should('be.visible')

        cy.get('[data-test="error"]')
            .should('contain.text', 'Username and password do not match any user in this service')
    })

    // TC03 - Invalid Username
    it('TC03 - should show error for invalid username', () => {
        cy.get('[data-test="username"]')
            .type('wrong_user')
        cy.get('[data-test="password"]')
            .type('secret_sauce')
        cy.get('[data-test="login-button"]')
            .click()

        cy.get('[data-test="error"]')
            .should('be.visible')
    })

    // TC04 - Empty Username
    it('TC04 - should show error when username is empty', () => {
        cy.get('[data-test="password"]')
            .type('secret_sauce')
        cy.get('[data-test="login-button"]')
            .click()

        cy.get('[data-test="error"]')
            .should('be.visible')
    })

    // TC05 - Empty Password
    it('TC05 - should show error when password is empty', () => {
        cy.get('[data-test="username"]')
            .type('standard_user')
        cy.get('[data-test="login-button"]')
            .click()

        cy.get('[data-test="error"]')
            .should('be.visible')
    })

    // TC06 - Locked User
    it('TC06 - should show error for locked user', () => {
        cy.get('[data-test="username"]')
            .type('locked_out_user')
        cy.get('[data-test="password"]')
            .type('secret_sauce')
        cy.get('[data-test="login-button"]')
            .click()

        cy.get('[data-test="error"]')
            .should('be.visible')
    })

})