const directive = require('../pageobjects/angularPage/directive.page');
const environments = require('../../data/environments.json')
const mainPage = require('../pageobjects/angularPage/main.page');
const searchPage = require('../pageobjects/angularPage/searchResult.page');


describe('TC-2 - Checking search field on landing page', () => {
    before(() => {
        mainPage.open();
    });

    it('Search input should be visible in the nav bar', () => {
        expect(mainPage.search).toBeDisplayed;
    });

    it('Search input should be empty by default', () => {
        expect(mainPage.search).toHaveValue('');
    });

    it('Proper placehodleer should be in search input', () => {
        expect(mainPage.search).toHaveAttribute('placeholder', 'Search');
    });

    describe('Search suggestions', () => {
        it('Proper suggestion result', () => {
            mainPage.search.setValue('Directive');
            searchPage.searchResultItem.waitForExist();

            let arr = [];
            searchPage.searchResultItems.forEach(element => {
                arr.push(element.getText());
            });
            expect(arr).toContain('Directive');
        });
    });
    describe('Search results', () => {
        beforeEach(() => {
            mainPage.search.setValue('Directive');
            searchPage.searchResultItem.waitForExist();
            searchPage.directiveSpan.click();
        });
        it('Should have proper URL to be redirected to', () => {
            expect(browser.getUrl()).toBe(`${environments.ANGULAR_URL}api/core/Directive`);
        });

        it('Should have proper page title', () => {
            directive.h1.waitForDisplayed();
            expect(directive.h1Directive).toHaveTextContaining('Directive');
        });
    });
});
