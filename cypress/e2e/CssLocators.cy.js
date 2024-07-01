describe('CssLocators',() =>
{
it('test1',() => 
{
    cy.visit("https://www.google.com/")
    cy.title().should('eq', 'Google')
    cy.get('.L3eUgb').type("Google offered in:  ")
})
})