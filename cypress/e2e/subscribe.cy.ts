describe("  Test a form", () =>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    it("suscribe a user with valid email", ()=>{
        cy.getByData("email-input").type("daryldewilde@gmail.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist")
    })
    it("Doesn't suscribe a user with invalid email", ()=>{
        cy.getByData("email-input").type("daryl")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("Doesn't suscribe with an already existing email", ()=>{
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist")
    })
})