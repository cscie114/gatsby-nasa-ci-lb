const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // https://docs.cypress.io/guides/references/configuration#Testing-Type-Specific-Options
    // URL used as prefix for cy.visit() or cy.request() command's URL.
    baseUrl: 'http://localhost:8000',
  },
});
