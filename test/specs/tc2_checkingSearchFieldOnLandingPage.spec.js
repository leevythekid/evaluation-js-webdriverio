const mainPage = require('../pageobjects/angularPage/main.page');
const directive = require('../pageobjects/angularPage/directive.page');
const searchPage = require('../pageobjects/angularPage/searchResult.page');
const environments = require('../../data/environments.json')
const expect = require('chai').expect;

describe('TC-2 - Checking search field on landing page', () => {
    before(() => {
        mainPage.open();
    });

    it('Search input should be visible in the nav bar', () => {
        expect(mainPage.search.isDisplayed()).to.equal(true);
    });

    it('Search input should be empty by default', () => {
        expect(mainPage.search.getText()).to.equal('');
    });

    it('Proper placehodleer should be in search input', () => {
        expect(mainPage.search.getAttribute('placeholder')).to.equal('Search');
    });

    describe('Search suggestions', () => {
        it('Proper suggestion result', () => {
            mainPage.search.setValue('Directive');
            searchPage.searchResultItem.waitForExist();

            let arr = [];
            searchPage.searchResultItems.forEach(element => {
                arr.push(element.getText());
            });
            expect(arr).to.include('Directive');
        });
    });
    describe('Search results', () => {
        beforeEach(() => {
            mainPage.search.setValue('Directive');
            searchPage.searchResultItem.waitForExist();
            searchPage.directiveSpan.click();
        });
        it('Should have proper URL to be redirected to', () => {
            expect(browser.getUrl()).to.equal(`${environments.ANGULAR_URL}api/core/Directive`);
        });

        it('Should have proper page title', () => {
            directive.h1.waitForDisplayed();
            expect(directive.h1Directive.getText()).to.include('Directive');
        });
    });
});
