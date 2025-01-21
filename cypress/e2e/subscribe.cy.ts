const baseUrl =  Cypress.env("BASE_URL");
const selectors = {
    emailInput: "[data-test='email-input']",
    submitButton: "[data-test='submit-button']",
    successMessage: "[data-test='success-message']",
    serverErrorMessage: "[data-test='server-error-message']"
}

describe("Test a form", () =>{
    beforeEach(()=>{
        cy.visit(baseUrl)
    })

    it("suscribe a user with valid email", ()=>{
        cy.fixture("test_data").then((data)=>{
            cy.get(selectors.emailInput).type(data.valid_email)
        })
        cy.get(selectors.submitButton).click()
        cy.get(selectors.successMessage).should("exist")
    })
    it("Doesn't suscribe a user with invalid email", ()=>{
        cy.fixture("test_data").then((data)=>{
            cy.get(selectors.emailInput).type(data.invalid_email)
        })
        cy.get(selectors.emailInput).type("daryl")
        cy.get(selectors.submitButton).click()
        cy.get(selectors.successMessage).should("not.exist")
    })
    it("Doesn't suscribe with an already existing email", ()=>{
        cy.fixture("test_data").then((data)=>{
            cy.get(selectors.emailInput).type(data.existing_email)
        })
        cy.get(selectors.submitButton).click()
        cy.get(selectors.serverErrorMessage).should("exist")
    })
})