//const cypress = require("cypress")
describe('My First Test', () => 
{
    it('test 1-verify title-positive test', () =>                  
    { 
        cy.visit("https://www.google.com/")
        cy.title().should('eq', 'Google')
    })
})