Feature: Llenar el formulario de datos para completar la compra

  Scenario: Ingresar datos válidos y proceder con la compra
    Given un usuario ha accedido al formulario de compra
    When completa todos los campos requeridos con datos válidos
    Then debería poder enviar el formulario y finalizar la compra