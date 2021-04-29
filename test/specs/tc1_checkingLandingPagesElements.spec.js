const docsPage = require('../pageobjects/angularPage/docs.page');
const environments = require('../../data/environments.json')
const mainPage = require('../pageobjects/angularPage/main.page');


describe('TC-1 - Checking Landing Pages Elements', () => {
    before(() => {
        mainPage.open();
    });

    it('Angular Logo in the navbar should be visible', () => {
        expect(mainPage.angularLogoNavBar).toBeDisplayedInViewport();
    });

    it('Angular Logo in the hero section should be visible', () => {
        expect(mainPage.angularLogoHeroSection).toBeDisplayedInViewport();
    });

    it('Proper headline in hero section', () => {
        expect(mainPage.heroHeadline).toHaveText('The modern web\ndeveloper\'s platform');
    });

    it('Get started button should be clickable', () => {
        expect(mainPage.getStartedButton).toBeClickable();
    });

    describe('Get Started Page', () => {
        before('Click Get Started button', () => {
            mainPage.clickGetStartedButton();
            docsPage.title.waitForDisplayed();
        });
        it(`URL should be ${environments.ANGULAR_URL}docs`, () => {
            expect(docsPage.getUrl()).toBe(`${environments.ANGULAR_URL}docs`);
        });
        it('Title should be "Introduction to the Angular Docs"', () => {
            expect(docsPage.title).toHaveText('Introduction to the Angular Docs');
        });
    });
});
