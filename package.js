Package.describe({
  summary: "Ravelry OAuth flow",
  name: "amschrader:ravelry",
  git: "git@github.com:amschrader/ravelry.git",
  version: "0.1.0"
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('amschrader:ravelry');
  api.addFiles('ravelry-tests.js');
});

Package.on_use(function(api) {
  api.use('http@1.0.8', ['client', 'server']);
  api.use('templating@1.0.9', 'client');
  api.use('oauth1@1.1.2', ['client', 'server']);
  api.use('oauth@1.1.2', ['client', 'server']);
  api.use('random@1.0.1', 'client');
  api.use('underscore@1.0.1', 'server');
  api.use('service-configuration@1.0.2', ['client', 'server']);

  api.export && api.export('Ravelry');

  api.add_files([
    'ravelry-configure.html', 
    'ravelry-configure.js'
  ],'client');

  api.add_files('ravelry-server.js', 'server');
  api.add_files('ravelry-client.js', 'client');
});
