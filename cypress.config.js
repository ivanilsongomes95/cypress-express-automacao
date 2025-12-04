const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com/ncr?hl=en",
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {

      on('before:browser:launch', (browser = {}, launchOptions) => {

        if (browser.family === 'chromium' && browser.name !== 'electron') {

          // Remove a flag que denuncia automação
          launchOptions.args.push("--disable-blink-features=AutomationControlled");

          // Remove cabeçalho "navigator.webdriver"
          launchOptions.args.push("--disable-features=IsolateOrigins,site-per-process");

          // Simula uso humano (não é hack ilegal)
          launchOptions.args.push("--no-sandbox");
          launchOptions.args.push("--disable-dev-shm-usage");

          // Override de user-agent para parecer um usuário real
          launchOptions.args.push(
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
          );
        }

        return launchOptions;
      });

      return config;
    }
  }
});
