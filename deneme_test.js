
Feature('Deneme');

Scenario('test something', (I) => {

    I.amOnPage('/');
    I.fillField('#search_query_top','Printed Chiffon Dress');
    I.click({name:'submit_search'});
    I.click('//ul[contains(@class,"product_list")]/li[1]//a[@title="Add to cart"]');
    I.wait(5);

});
