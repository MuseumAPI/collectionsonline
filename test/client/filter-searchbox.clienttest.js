module.exports = {
  'Search from home Page': function (browser) {
    browser
      .url('http://localhost:8000/search?q=babbage')
      .waitForElementVisible('body', 1000)
      .click('#fb')
      .waitForElementVisible('.filter__box[value=Art]', 3000)
      .click('.filter__box[value=Art]')
      .waitForElementVisible('.filterbadge__label')
      .assert.containsText('.filterbadge__label', 'Art')
      .end();
  }
};