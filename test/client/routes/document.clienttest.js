module.exports = {
  /* drop test : JU : 20/11/2017
  'Document Page': function (browser) {
    browser
      .url('http://localhost:8000/documents/aa110000003')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.record-top__title', 'The Babbage Papers')
      .assert.containsText('.details-Identifier', 'BAB')
      .assert.containsText('.details-Access', 'The collection is available for public consultation according to the Science Museum Library and Archives Policy.')
      .assert.containsText('.archive-tree', 'The Babbage Papers')
      .click('label[for=aa110000009]')
      .assert.urlEquals('http://localhost:8000/documents/aa110000003')
      .pause(1000)
      .assert.containsText('.archive-tree', 'Cardboard drawings')
      .setValue('input[type=search]#archive-q', 'scheutz\'s')
      .click('.searchbox--archive button.searchbox__submit')
      .pause(1000)
      .assert.urlEquals('http://localhost:8000/search/documents/archive/the-babbage-papers?q=scheutz%27s')
      .assert.containsText('.resultcard', 'Papers relating to the Scheutz\'s')
      .end();
  }
  */
};
