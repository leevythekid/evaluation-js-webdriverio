const mainPage = require('../pageobjects/angularPage/main.page');
const URLs = require('../../data/URLs.json')
const expect = require('chai').expect;

describe("TC-10 - Checking Twitter Icon Interractions", () => {
    before(() => {
        mainPage.open();
    });

    it('Twitter icon should be displayed', () => {
        expect(mainPage.socialElement("Twitter").isDisplayedInViewport()).to.equal(true);
    });

    it('Should open the corresponding page on a new tab if clicked with scrollwheel', () => {
        mainPage.socialElement('Twitter').click({ button: "middle" });

        browser.switchWindow(URLs.TWITTER);
        expect(browser.getUrl()).to.equal(URLs.TWITTER)
    });
});