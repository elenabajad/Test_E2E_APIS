Feature: Gestionar el carrito de compras

  Scenario: Acceder al carrito y proceder con el pedido
    Given un usuario tiene productos en el carrito de compras
    When accede al carrito
    Then debería poder iniciar el proceso de pedido de orden de compra