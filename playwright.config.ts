import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: 'tests',
  webServer: { command: 'npm run preview', url: 'http://localhost:4173', reuseExistingServer: true, timeout: 60000 },
  use: { baseURL: 'http://localhost:4173', screenshot: 'only-on-failure' }
});
