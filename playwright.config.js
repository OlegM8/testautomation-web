
const config = {
  testDir: './tests',
  timeout: 60000,
  workers: 2,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  reporter: 'html',
  use: {
    headless: false,
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium'}
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox'}
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit'}
    }
  ]
};

module.exports = config;
