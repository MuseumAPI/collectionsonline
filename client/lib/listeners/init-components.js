var svg4everybody = require('svg4everybody');
var searchBox = require('./search-box');
var clipboard = require('./clipboard');
var moreButton = require('./more-button');
var carousel = require('./carousel');
var moreDetails = require('./expand-details-button');

module.exports = (ctx) => {
  svg4everybody();
  searchBox();
  clipboard();
  moreButton();
  moreDetails();
  carousel(ctx);
};
