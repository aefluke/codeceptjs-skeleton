
// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    login(username, password) {

      this.amOnPage('/');
      this.fillField('username', username);
      this.fillField('password', password);
      this.click('Login');
    },

    logout() {
    },

    amSignedIn(username) {
      
      this.amOnPage('/');
      this.see(username);
    },

    waitForLoading(){

    }

  });
}
