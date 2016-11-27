module.exports = {
  'Aldeed Demo - Create/Delete User' : function (client) {
    client
      .url('http://')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.container', 'Registered People')
      .setValue('input[name=firstName]', 'Happy QA')
      .setValue('input[name=lastName]', 'Users Last Name')
      .setValue('input[name=password]', '1234')
      .setValue('input[name=age]', '10')
      .setValue('input[name=birthDate]', '1925-10-25')
      .click('select[name=gender] option[value=Male]')
      .setValue('input[name=email]', 'test@dev.test')
      .click('.btn-primary')
      .pause(1000)
      .assert.containsText('.table', 'Happy QA')
  },

  'Aldeed Demo - Delete User' : function (client) {
    client
      .url('http://')
      .assert.containsText('.table', 'Happy QA')
      .pause(1000)
      .click('.table tbody tr td a')
      .click('.btn-danger')
      .pause(3000)
      .acceptAlert()
      .pause(1000)
      .assert.elementNotPresent('.table tbody tr td a')
      .end();
  }
};
