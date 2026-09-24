describe('Login Tests with Cypress Hooks', () => {

    // Runs once before all tests in this describe block
    before(() => {
        cy.log('=== Starting Login Test Suite ===')
    })

    // Runs before each test in this describe block
    beforeEach(() => {
        cy.log('Navigating to SauceDemo login page')
        cy.visit('https://www.saucedemo.com/')
    })

    // Runs after each test in this describe block
    afterEach(() => {
        cy.log('Test execution completed')
    })

    // Runs once after all tests in this describe block finish
    after(() => {
        cy.log('=== All Login Tests Completed ===')
    })

    it('should login successfully with valid credentials', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
    })

    it('should show error for invalid password', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('wrong_password')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Username and password do not match')
    })

})
