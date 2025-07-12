import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("el usuario está navegando en la tienda", () => {
  cy.visit("https://www.demoblaze.com/index.html")
  cy.wait(1000)
  cy.iniciarSesion("elena1","elena123")
  cy.get('.active > .nav-link').click()
})

When("el usuario elige varios productos para agregar al carrito", () => {
  cy.agregarProductos()
})

Then("los productos deberían agregarse correctamente al carrito", () => {
  cy.get("#cartur").click()
})