const { I } = inject();

module.exports = {

  title: "En Trend Ürünler Türkiye'nin Online Alışveriş Sitesi Trendyol'da",
  popup: '.homepage-popup',

  fields: {

    searchTextBox: '#AutoCompleteBox',
  },

  buttons: {

    searchSubmit: 'a.autocomplete-submit-button.search-icon'
  },

  go() {
    I.amOnPage("/");
  },
  
  selectGender(gender) {
    I.click(gender, this.popup);
  },
  
  searchFor(item) {

    I.fillField(this.fields, item);
    I.click(this.buttons.searchSubmit);
  },

}
