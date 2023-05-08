/// <reference types="cypress" />

const loginEmail = 'brandon.ashby@braash.com'
const loginPassword = 'Apple123@'
const appBaseUrl = 'http://localhost:3000/login'


describe('Onboarding', () => {

    beforeEach(() => {
        cy.visit(appBaseUrl);
    })

    describe('My First Test', () => {
        it('Does not do much!', () => {
          expect(true).to.equal(true)
        })
      })

    describe('Check if Onboarding UI is visible', () => {
        it('Login elements should be visible', () => {
            cy.get('h2')
                .contains('Log in')
                .first()
                .should('be.visible')

            cy.get('label')
                .contains('Email')
                .first()
                .should('be.visible')
        })
    })

    describe('Log in', () => {
        

        it('should have an App store button', () => {
            // cy.get('#button/login/get-app').click();
            cy.get('#email')
                .type(loginEmail)

            cy.get('#password')
                .type(loginPassword)

            cy.get('button')
                .contains('Log in')
                .first()
                .click()

            cy.wait(3000)
        });
    })

    
})