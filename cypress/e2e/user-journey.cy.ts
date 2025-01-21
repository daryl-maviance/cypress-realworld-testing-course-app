const baseUrl =  Cypress.env("BASE_URL");

describe('User Journey', () => {

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it("User can fin a course on the homepage and complete the course lessons",() => {
        cy .getByData("course-0").find("a").contains("Get started").click()
        cy.location("pathname").should("eq","/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq","/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq","/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
    })
}
)