Cypress.Commands.add('iniciarSesion', (usuario, contraseña)  => {
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type(usuario)
    cy.wait(1000)
    cy.get('#loginpassword').type(contraseña)
    cy.wait(2000)
    cy.get('#logInModal .btn-primary').click()
})

Cypress.Commands.add('agregarProductos', () => {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.wait(2000)
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
})

Cypress.Commands.add('carritoCompras', ()  => {
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
})

Cypress.Commands.add('llenarDatos', ()  => {
    cy.get('#name').type("Elena")
    cy.wait(2000)
    cy.get('#country').type("Ecuador")
    cy.wait(2000)
    cy.get('#city').type("Duran")
    cy.get('#card').type("45678492018863")
    cy.get('#month').type("5")
    cy.get('#year').type("2025")
})

Cypress.Commands.add('finalizarCompra', ()  => {
    cy.get('#orderModal .btn-primary').click()
    cy.get('.confirm').click()
})