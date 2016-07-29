var Templates = require('../templates');
var exampleData = require('../../src/data/object.json');
var initJqueryComp = require('../lib/init-jquery-components.js');
var getDataItem = require('../lib/get-data-item');

module.exports = function (page) {
  page('/objects/:id', load, render);
};

function load (ctx, next) {
  if (!ctx.isInitialRender) {
    var opts = {
      headers: { Accept: 'application/vnd.api+json' }
    };
    var id = ctx.params.id;
    var url = '/objects/' + id;
    getDataItem(url, opts, function (data) {
      ctx.state.data = data;
      next();
    });
  }
}

function render (ctx, next) {
  var pageEl = document.getElementsByTagName('main')[0];
  ctx.state.data.slides = exampleData.slides;
  pageEl.innerHTML = Templates['objects'](ctx.state.data);
  document.getElementsByTagName('title')[0].textContent = ctx.state.data.titlePage;
  window.scrollTo(0, 0);
  initJqueryComp();
}
