const baseUrl =  Cypress.env("BASE_URL");

const selectors = {
    emailInput: "[data-test='email-input']",
    submitButton: "[data-test='submit-button']",
    successMessage: "[data-test='success-message']",
    serverErrorMessage: "[data-test='server-error-message']",
    course0: "[data-test='course-0']",
    nextLessonButton: "[data-test='next-lesson-button']",
    challengeAnswer0: "[data-test='challenge-answer-0']"
}
describe('User Journey', () => {

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it("User can find a course on the homepage and complete the course lessons",() => {
        cy.get(selectors.course0).find("a").contains("Get started").click()
        cy.location("pathname").should("eq","/testing-your-first-application")
        cy.get(selectors.nextLessonButton).click()
        cy.get(selectors.challengeAnswer0).click()
        cy.get(selectors.nextLessonButton).should("exist").click()
        cy.location("pathname").should("eq","/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.get(selectors.challengeAnswer0).click()
        cy.get(selectors.nextLessonButton).click()
        cy.location("pathname").should("eq","/testing-your-first-application/setting-up-data-before-each-test")
        cy.get(selectors.challengeAnswer0).click()
        cy.get(selectors.nextLessonButton).click()
    })
})