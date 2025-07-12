describe('Pruebas API Demoblaze - Signup y Login', () => {
  const usuario = 'elena3'
  const password = 'elena123'

  it('Crear un nuevo usuario en signup', () => {
  cy.log('Nuevo usuario para signup')
    cy.request({
      method: 'POST',
      url: '/signup',
      body: { username: usuario, password: password },
    }).then((res) => {
      cy.log('Salida:', JSON.stringify(res.body)) //Se convierte el JSON en String en cadena de caracteres (JSON.stringify)
      expect(res.status).to.be.oneOf([200, 201]) //validación de respuesta ok
    })
  })

//MÉTODO GET NO PERMITIDO
   it('Metodo no permitido en signup', () => {
  cy.log('signup')
    cy.request({
      method: 'GET',
      url: '/signup',
      failOnStatusCode: false,
    }).then((res) => {
      cy.log('Salida:', JSON.stringify(res.body)) //Se convierte el JSON en String en cadena de caracteres (JSON.stringify)
      expect(res.status).to.eq(405)
    })
  })

  //Testing adicional POST
   it('Crear un nuevo usuario con campos vacios en signup', () => {
  cy.log('Nuevo usuario para signup con credenciales vacias')
    cy.request({
      method: 'POST',
      url: '/signup',
      body: { username: "", password: "" },
      failOnStatusCode: false,
    }).then((res) => {
      cy.log('Salida:', JSON.stringify(res.body))
      expect(res.status).to.eq(500)
    })
  }) 

  it('Intentar crear un usuario ya existente', () => {
    cy.log('Entrada: username ya registrado en signup')
    cy.request({
      method: 'POST',
      url: '/signup',
      body: { username: usuario, password: password },
    }).then((res) => {
      cy.log('Salida:', JSON.stringify(res.body))
      expect(res.body).to.have.property('errorMessage', 'This user already exist.')
    })
  })

  it('Usuario y password correcto en login', () => {
    cy.log('Entrada: username y password correctos en login')
    cy.request({
      method: 'POST',
      url: '/login',
      body: { username: usuario, password: password },
    }).then((res) => {
      cy.log('Salida:', JSON.stringify(res.body))
      expect(res.status).to.eq(200)
     const regex = /Auth_token:\s[A-Za-z0-9+/=]+/  //se valida el formato
     expect(res.body).to.match(regex)
    })
  })

  //
    it('Usuario y password vacios en login', () => {
    cy.log('Entrada: username y password vacios en login')
    cy.request({
      method: 'POST',
      url: '/login',
       body: { username: "", password: "" },
       failOnStatusCode: false,
    }).then((res) => {
      cy.log('Salida:', JSON.stringify(res.body))
     /* expect(res.status).to.eq(200)
     const regex = /Auth_token:\s[A-Za-z0-9+/=]+/  //se valida el formato
     expect(res.body).to.match(regex)*/
    })
  })

  it('Usuario y password incorrecto en login', () => {
    cy.log('Entrada: username correcto y password incorrecto en login')
    cy.request({
      method: 'POST',
      url: '/login',
      body: { username: usuario, password: 'passwordIncorrecto' },
    }).then((res) => {
      cy.log('Salida:', JSON.stringify(res.body))
      expect(res.body).to.have.property('errorMessage', 'Wrong password.')
    })
  })
})