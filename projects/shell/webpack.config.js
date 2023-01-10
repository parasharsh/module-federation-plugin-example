const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({

  shared: {
    '@angular/core': { eager: true, singleton: true },
        '@angular/common': { eager: true, singleton: true },
        '@angular/router': { eager: true, singleton: true }
  },
  sharedMappings: ['ui-sdk', "ui-sdk/card", "ui-sdk/button"]
});
console.log(config.plugins[0]._options)
module.exports = config;
