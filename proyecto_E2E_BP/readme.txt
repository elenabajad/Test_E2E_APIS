PROYECTO: Prueba Funcional Automatizada - Flujo de Compra en DemoBlaze.

DESCRIPCIÓN:
Este proyecto contiene una prueba End-to-End (E2E) automatizada del flujo de compra en la página web https://www.demoblaze.com/.

La prueba simula el comportamiento de un usuario que:
1. Agrega dos productos distintos al carrito.
2. Visualiza el contenido del carrito.
3. Completa el formulario de compra con datos ficticios.
4. Finaliza el proceso de compra.

TECNOLOGÍAS UTILIZADAS:
------------------------
- Lenguaje: JavaScript (Cypress) / (u otro framework si aplica)
- Framework de testing: Cypress.io
- Dependencias adicionales: (cypress-cucumber-preprocessor)
- Navegador: Chrome / Electron / Edge (según configuración en Cypress)

PRE-REQUISITOS:
----------------
- Node.js instalado (versión recomendada: 18+)
- Cypress instalado globalmente o como dependencia local

EJECUCIÓN DE LA PRUEBA:
------------------------
Desde la terminal, ejecuta:

   npx cypress open

O para ejecutar en modo headless:

   npx cypress run

La prueba se ejecutará automáticamente y simulará el flujo de compra descrito anteriormente.

ESTRUCTURA DE CARPETAS:
------------------------
- /cypress
  - /e2e                        → Escenario de prueba
   - /e2e/features              → Escenario con lenguaje Gherkin
  - /support                    → Archivos de configuración y comandos personalizados
   - /support/step_definitions  → Pasos de ejecución de los features
  - /reports                    → Reportes generados .html , .json
- /videos                       → video de testing


ESCENARIOS CUBIERTOS:
-------------------
✔ Agregar 2 productos distintos al carrito  
✔ Visualizar el carrito  
✔ Completar el formulario de compra (nombre, país, ciudad, tarjeta, mes, año)  
✔ Confirmar y finalizar la compra

LINK GITHUB:
-----------
https://github.com/elenabajad/Test_E2E_APIS.git

AUTOR:
------
Elena Bajaña Diaz  
Fecha: 11/07/2025









