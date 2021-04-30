const mainPage = require('../pageobjects/getbootstrapPage/main.page')
const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page')

describe('TC-10 Header visiblility', () => {
    before(() => {
        dropdownPage.open()
    });

    it('Should be displayed by default', () => {
        expect(mainPage.navBar).toBeDisplayedInViewport();
    });

    it('Should not not be displayed if scrolled out of view', () => {
        const navbarSize = mainPage.navBar.getSize('height');

        browser.execute((navbarSize) => window.scroll(0, navbarSize), navbarSize);
        browser.pause(1000)
        expect(mainPage.navBar).not.toBeDisplayedInViewport();
    });
});