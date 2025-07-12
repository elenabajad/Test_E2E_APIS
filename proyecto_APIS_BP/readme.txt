PROYECTO: Pruebas de Servicios REST (Signup y Login) con Cypress en DemoBlaze.

DESCRIPCIÓN:
Este proyecto contiene pruebas automatizadas con Cypress de los servicios REST expuestos por la página https://www.demoblaze.com/, específicamente:
- Registro de usuario (Signup)
- Autenticación de usuario (Login)

Las pruebas automatizadas validan los siguientes casos:
1. Crear un nuevo usuario  
2. Intentar registrar un usuario ya existente  
3. Login con usuario y contraseña correctos  
4. Login con usuario o contraseña incorrectos

ENDPOINTS UTILIZADOS:
----------------------
- POST https://api.demoblaze.com/signup  
- POST https://api.demoblaze.com/login

PRE-REQUISITOS:
----------------
- Node.js instalado (versión recomendada: 18+)
- Cypress instalado globalmente o como dependencia local

EJECUCIÓN DE LA PRUEBA:
------------------------
Desde la terminal, ejecuta:

   npx cypress open

O para ejecutar en modo headless:

   npx cypress run test_funcional

La prueba se ejecutará automáticamente.

ESTRUCTURA DE CARPETAS:
------------------------
- /cypress
  - /e2e                        → Escenario de prueba
  - /support                    → Archivos de configuración y comandos personalizados
  - /reports                    → Reportes generados .html , .json
- /videos                       → video de testing

LINK GITHUB:
-----------
https://github.com/elenabajad/Test_E2E_APIS.git

AUTOR:
------
Elena Bajaña Diaz  
Fecha: 11/07/2025
