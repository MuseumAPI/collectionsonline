var $ = require('jquery');

module.exports = function (pageType) {
  /**
  * select all the input checkbox checked, all the other input but not the checkbox (already selected) and not fields[type] already on url
  */
  var queryParams = $('#search-form input:checked, #search-form input:not([type="checkbox"],[name="fields[type]"],[name="page[type]"] ) ').filter(function (i, el) {
    return $(el).val() !== '';
  }).serialize();

  // select result per page
  var rpp = $('.control--rpp select').val() || 50;
  queryParams += '&' + encodeURIComponent('page[size]') + '=' + rpp;

  // define type view
  queryParams += '&' + encodeURIComponent('page[type]') + '=' + pageType;
  return queryParams;
};
