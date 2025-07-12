import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("un usuario ha accedido al formulario de compra", () => {
  cy.visit("https://www.demoblaze.com/index.html")
  cy.wait(1000)
  cy.iniciarSesion("elena1","elena123")
  cy.visit ("https://www.demoblaze.com/cart.html")
  cy.get('.col-lg-1 > .btn').click()
})

When("completa todos los campos requeridos con datos válidos", () => {
  cy.llenarDatos()
})

Then("debería poder enviar el formulario y finalizar la compra", () => {
  cy.get('#orderModal .btn-primary').click()
  cy.get('.sweet-alert > h2').should("be.visible")
  cy.get('.confirm').click()
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
})