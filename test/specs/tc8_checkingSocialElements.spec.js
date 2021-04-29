const mainPage = require('../pageobjects/angularPage/main.page');
const URLs = require('../../data/URLs.json')


describe('TC-8 - Checking social elements', () => {
    before(() => {
        mainPage.open();
    });

    it('Twitter icon should be displayed', () => {
        expect(mainPage.socialElement("Twitter")).toBeDisplayed();
    });

    it('Twitter icon should point to the corresponding page', () => {
        expect(mainPage.socialElement("Twitter")).toHaveAttributeContaining('href', URLs.TWITTER)
    });

    it('GitHub icon should be displayed', () => {
        expect(mainPage.socialElement("GitHub")).toBeDisplayed();
    });

    it('GitHub icon should point to the corresponding page', () => {
        expect(mainPage.socialElement("GitHub")).toHaveAttributeContaining('href', URLs.GITHUB)
    });

    it('YouTube icon should be displayed', () => {
        expect(mainPage.socialElement("YouTube")).toBeDisplayed();
    });

    it('YouTube icon should point to the corresponding page', () => {
        expect(mainPage.socialElement("YouTube")).toHaveAttributeContaining('href', URLs.YOUTUBE)
    });
});
