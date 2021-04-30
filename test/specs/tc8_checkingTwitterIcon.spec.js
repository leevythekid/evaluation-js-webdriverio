const mainPage = require('../pageobjects/angularPage/main.page');
const URLs = require('../../data/URLs.json')



describe("TC-8 - Checking Twitter Icon Interractions", () => {
    before(() => {
        mainPage.open();
    });

    it('Twitter icon should be displayed', () => {
        expect(mainPage.socialElement("Twitter")).toBeDisplayedInViewport();
    });

    it('Twitter icon should be clickable', () => {
        expect(mainPage.socialElement("Twitter")).toBeClickable();
    });

    it('Should open the corresponding page on a new tab if clicked with scrollwheel', () => {
        mainPage.socialElement('Twitter').click({ button: "middle" });

        browser.switchWindow(URLs.ANGULAR_TWITTER);
        expect(browser).toHaveUrl(URLs.ANGULAR_TWITTER)
    });
});
