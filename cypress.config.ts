import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    specPattern: '**/*.feature',
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({plugins: [createEsbuildPlugin(config)]}));
      
      return config;
    }
  }
});
