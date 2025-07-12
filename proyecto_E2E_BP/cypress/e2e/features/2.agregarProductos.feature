Feature: Agregar productos al carrito de compras

  Scenario: Un usuario selecciona y agrega múltiples productos
    Given el usuario está navegando en la tienda
    When el usuario elige varios productos para agregar al carrito
    Then los productos deberían agregarse correctamente al carrito