const mainPage = require('../pageobjects/angularPage/main.page');
const URLs = require('../../data/URLs.json')


describe('TC-8 - Checking social elements', () => {
    before(() => {
        mainPage.open();
    });

    it('Twitter icon should be displayed', () => {
        wdioExpect(mainPage.socialElement("Twitter")).toBeDisplayed();
    });

    it('Twitter icon should point to the corresponding page', () => {
        expect(mainPage.socialElement("Twitter").getAttribute('href')).to.equal(URLs.TWITTER);
    });

    it('GitHub icon should be displayed', () => {
        wdioExpect(mainPage.socialElement("GitHub")).toBeDisplayed();
    });

    it('GitHub icon should point to the corresponding page', () => {
        expect(mainPage.socialElement("GitHub").getAttribute('href')).to.equal(URLs.GITHUB);
    });

    it('YouTube icon should be displayed', () => {
        wdioExpect(mainPage.socialElement("YouTube")).toBeDisplayed();
    });

    it('YouTube icon should point to the corresponding page', () => {
        expect(mainPage.socialElement("YouTube").getAttribute('href')).to.equal(URLs.YOUTUBE);
    });
});