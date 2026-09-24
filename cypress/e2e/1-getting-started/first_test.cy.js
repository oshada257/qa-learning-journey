describe('my first cypress test', () => {
    it('should open google', () => {
        cy.visit('https://www.google.com')

        cy.title().should('include', 'Google')
    })
})