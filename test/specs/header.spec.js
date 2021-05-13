const mainPage = require('../pageobjects/getbootstrapPage/main.page')
const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page')

describe('Header visiblility', () => {
    before(() => {
        dropdownPage.open();
    });

    it('TC-01 Should be displayed by default', () => {
        expect(mainPage.navBar).toBeDisplayedInViewport();
    });

    it('TC-02 Should have proper height and width', () => {
        const windowWidth = browser.execute(() => document.documentElement.clientWidth);

        expect(mainPage.navBar.getSize('height')).toBe(64);
        expect(mainPage.navBar.getSize('width')).toBe(windowWidth);
    });

    it('TC-03 Should not be displayed if scrolled out of view', () => {
        const navbarHeight = mainPage.navBar.getSize('height');

        browser.execute((navbarHeight) => window.scroll(0, navbarHeight), navbarHeight);
        expect(mainPage.navBar).not.toBeDisplayedInViewport();
    });

    it('TC-04 Should be displayed if scroll to the very top', () => {
        dropdownPage.overviewSubpage.scrollIntoView();

        browser.execute(() => {
            window.scroll(0, 0);
        });
        expect(mainPage.navBar).toBeDisplayedInViewport();
    });
});
