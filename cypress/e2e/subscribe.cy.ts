const baseUrl =  Cypress.env("BASE_URL");

describe("Test a form", () =>{
    beforeEach(()=>{
        cy.visit(baseUrl)
    })

    it("suscribe a user with valid email", ()=>{
        cy.fixture("test_data").then((data)=>{
            cy.getByData("email-input").type(data.valid_email)
        })
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist")
    })
    it("Doesn't suscribe a user with invalid email", ()=>{
        cy.getByData("email-input").type("daryl")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("Doesn't suscribe with an already existing email", ()=>{
        cy.fixture("test_data").then((data)=>{
            cy.getByData("email-input").type(data.invalid_email)
        })
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist")
    })
})