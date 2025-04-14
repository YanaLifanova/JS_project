/// <reference types="cypress" />


describe('description of the suite', () => {

    it("description of the test", ()=>{
        cy.visit("https://www.automationexercise.com/test_cases");
        cy.get('a[href="/"]').should('have.css', 'color', 'rgb(66, 139, 202)');

        
    });
});