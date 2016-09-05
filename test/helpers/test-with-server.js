const tape = require('tape');
const createServer = require('../../server');
const config = require('../../config');
const createMockDatabase = require('./mock-database');
var stub = require('sinon').stub;

/**
* Wrap tape's test function with a function that creates a new server and mocks dependencies
* @param {string} description - the description for yoyr tape test
* @param {object} options - options object
* @param {object} options.mock - elasticsearch database mock options
* @param {string} options.mock.method - the elasticsearch method you want to mock, for example: 'get', 'search'
* @param {object} options.mock.response - an object containing either an error or data to return in the es callback
* @param {*} options.mock.response.error - optional error to return from es callback
* @param {*} options.mock.response.data - optional data to return from es callback
**/
module.exports = (description, options, cb, auth) => {
  const elastic = createMockDatabase();
  if (auth) {
    config.auth = true;
  } else {
    config.auth = false;
  }
  createServer(elastic, config, (err, ctx) => {
    if (err) {
      console.log(err);
      throw err;
    }

    if (options.mock) {
      if (!options.mock.method) {
        throw new Error('Mock needs to include a method');
      }

      stub(elastic, options.mock.method, function (params, cb) {
        process.nextTick(function () {
          cb(options.mock.response.error, options.mock.response.data);
        });
      });
    }

    tape(description, (t) => {
      cb(t, ctx);
    });
  });
};
