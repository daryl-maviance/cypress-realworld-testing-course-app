const baseUrl =  Cypress.env("BASE_URL");

describe('home page', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
  })

  context("hero-section", () => {
    it('the  heading has correct test', () => {
      cy.get("[data-test='hero-heading']").should("exist").contains("Cypress")
    })
  
    it("seccond test", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(2).contains("Free and Open Source")
      cy.get("dt").eq(1).contains("25+ Lessons")
  
    })
  })
  
  context("courses-section", () => {
    it("passes", () => {
      cy.getByData("course-0").find("a").eq(0).click()
      cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")
    })
    it("passes", () => {
      cy.getByData("course-1").find("a").eq(0).click()
      cy.location("pathname").should("eq", "/testing-foundations/testing-is-a-mindset")
    })
    it("passes", () => {
      cy.getByData("course-2").find("a").eq(0).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals/how-to-write-a-test")
    })
  })

})