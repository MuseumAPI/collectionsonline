const Hapi = require('hapi');
const routes = require('./routes');
const auth = require('./auth');

module.exports = (elastic, config, cb) => {
  const server = new Hapi.Server();

  server.connection({
    port: config.port,
    routes: { cors: true, log: true }
  });

  server.route(routes(elastic, config));
  if (config.auth) {
    server.route(auth());
    server.register(require('hapi-auth-jwt2'), (err) => {
      console.log('error hapi-auth-jwt2', err);
      server.register(require('./auth/authentication'));
    });
  }
  server.register([
    {
      register: require('good'),
      options: {
        reporters: {
          console: [{ module: 'good-console' }, 'stdout']
        }
      }
    },
    require('inert'),
    require('vision'),
    require('h2o2'),
    {
      register: require('./routes/plugins/error'),
      options: {
        config: config
      }
    }
  ], (err) => {
    if (err) {
      return cb(err);
    }

    server.views({
      engines: { html: { module: require('handlebars'), compileMode: 'sync' } },
      relativeTo: __dirname,
      path: './templates/pages',
      layout: 'default',
      layoutPath: './templates/layouts',
      partialsPath: './templates/partials',
      helpersPath: './templates/helpers'
    });

    cb(null, { server, elastic });
  });
};
