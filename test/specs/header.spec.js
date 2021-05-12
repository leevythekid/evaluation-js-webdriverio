const mainPage = require('../pageobjects/getbootstrapPage/main.page')
const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page')

describe('Header visiblility', () => {
    before(() => {
        dropdownPage.open();
    });

    it('TC-01 Should be displayed by default', () => {
        expect(mainPage.navBar).toBeDisplayedInViewport();
    });

    it('TC-02 Should not be displayed if scrolled out of view', () => {
        const navbarHeight = mainPage.navBar.getSize('height');

        browser.execute((navbarHeight) => window.scroll(0, navbarHeight), navbarHeight);
        expect(mainPage.navBar).not.toBeDisplayedInViewport();
    });

    it('TC-03 Should be displayed if scroll to the very top', () => {
        dropdownPage.overviewSubpage.scrollIntoView();

        browser.execute(() => {
            window.scroll(0, 0);
        });
        expect(mainPage.navBar).toBeDisplayedInViewport();
    });
});
