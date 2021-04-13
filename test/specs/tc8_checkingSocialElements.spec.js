const mainPage = require('../pageobjects/angularPage/main.page');
const expectChai = require('chai').expect;

describe('TC-8 - Checking social elements', () => {
    before(() => {
        mainPage.open();
    });

    it('Twitter icon should be displayed', () => {
        expect(mainPage.socialElement("Twitter")).toBeDisplayed();
    });

    it('Twitter icon should point to the corresponding page', () => {
        expectChai(mainPage.socialElement("Twitter").getAttribute('href')).to.equal('https://twitter.com/angular');
    });

    it('GitHub icon should be displayed', () => {
        expect(mainPage.socialElement("GitHub")).toBeDisplayed();
    });

    it('GitHub icon should point to the corresponding page', () => {
        expectChai(mainPage.socialElement("GitHub").getAttribute('href')).to.equal('https://github.com/angular/angular');
    });

    it('YouTube icon should be displayed', () => {
        expect(mainPage.socialElement("YouTube")).toBeDisplayed();
    });

    it('YouTube icon should point to the corresponding page', () => {
        expectChai(mainPage.socialElement("YouTube").getAttribute('href')).to.equal('https://youtube.com/angular');
    });
});