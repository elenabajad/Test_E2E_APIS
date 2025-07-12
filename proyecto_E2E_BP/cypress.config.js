const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.{feature,cy.js}",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },

    // 💡 Aquí va el reporter
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      overwrite: false,
      html: true,
      json: true
    },
    // ✅ Configuración para grabar video
    video: true,                      // Grabar video activado
    videosFolder: "cypress/videos",   // Carpeta donde se guardan los videos
    videoUploadOnPasses: true         // También guardar si pasan (opcional)
  }
});
