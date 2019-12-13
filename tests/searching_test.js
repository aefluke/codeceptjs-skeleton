
Feature('Searching');

// Before(login => {
//     login('user');
// });

Scenario('Search for an item', async (I, homePage) => {

    homePage.go();
    I.seeTitleEquals(homePage.title);
    homePage.selectGender("ERKEK");
    homePage.searchFor("iphone");
    I.seeInTitle("Tüm Ürünler - Trendyol");
    I.see("\"iphone\" araması için");
});

