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
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use('underscore', 'server');
  api.use('service-configuration', ['client', 'server']);

  api.export && api.export('Ravelry');

  api.add_files([
    'ravelry-configure.html', 
    'ravelry-configure.js'
  ],'client');

  api.add_files('ravelry-server.js', 'server');
  api.add_files('ravelry-client.js', 'client');
});
