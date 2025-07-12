describe("Test Flujo Funcional", () => {
    it("Iniciar sesión, agregar productos y finalizar compra", () => {
        cy.visit("https://www.demoblaze.com/")
        cy.iniciarSesion("elena1", "elena123")
        cy.agregarProductos()
        cy.carritoCompras()
        cy.llenarDatos()
        cy.finalizarCompra()
    })
})