import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("un usuario tiene productos en el carrito de compras", () => {
  cy.visit("https://www.demoblaze.com/index.html")
  cy.wait(1000)
  cy.iniciarSesion("elena1","elena123")
  cy.wait(2000)
  cy.visit ("https://www.demoblaze.com/cart.html")
  cy.wait(1000)
})

When("accede al carrito", () => {
  cy.get(':nth-child(4) > .nav-link').should("be.visible")
})

Then("debería poder iniciar el proceso de pedido de orden de compra", () => {
  cy.get('.col-lg-1 > .btn').click()
})