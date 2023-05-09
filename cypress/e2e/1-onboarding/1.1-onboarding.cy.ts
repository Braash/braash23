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

    describe('LOG IN', () => {
        it('Log in to BRALE', () => {
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

    describe('LOG OUT', () => {
        it('Log out of the BRALE application', () => {
            // cy.get('#button/login/get-app').click();
            cy.get('button')
                .contains('Log out')
                .first()
                .should('be.visible')
                .click()
                
            cy.wait(3000)
        });
    })

    describe('SIGN UP', () => {
        it('and on the BRALE sign up screen', () => {
            // cy.get('#button/login/get-app').click();
            cy.get('#signup')
                .click()
                
            cy.wait(2000)
        });
    })

    
})