import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("un usuario ingresa a la página que desea inciar sesión", () => {
  cy.visit("https://www.demoblaze.com/")
})

When("digita los datos necesarios, usuario y contraseña", () => {
  cy.wait(2000)
  cy.iniciarSesion("elena1","elena123")
})

Then("debería dar click en el botón de iniciar sesión", () => {
  cy.get('#logInModal .btn-primary').click()
    cy.wait(2000)
})
