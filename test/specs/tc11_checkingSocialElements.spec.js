const mainPage = require('../pageobjects/getbootstrapPage/main.page');
const URLs = require('../../data/URLs.json')
const environments = require('../../data/environments.json')
const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page')

describe('TC-11 - Checking social elements', () => {
    before(() => {
        dropdownPage.open();
    });

    const testData = [
        { siteName: 'Github', expectedHref: URLs.BOOTSTRAP_GITHUB },
        { siteName: 'Twitter', expectedHref: URLs.BOOTSTRAP_TWITTER },
        { siteName: 'Slack', expectedHref: URLs.BOOTSTRAP_SLACK },
        { siteName: 'Opencollective', expectedHref: URLs.BOOTSTRAP_OPENCOLLECTIVE }
    ]

    const mouseAction = [
        { name: 'left-click', value: { button: 'left' } },
        { name: 'middle-click', value: { button: 'middle' } }
    ]

    testData.forEach(({ siteName, expectedHref }) => {
        it(`TC-11#1 ${siteName} icon should be displayed and have proper href value`, function () {
            expect(mainPage.getSocialElement(siteName)).toBeDisplayed();
            expect(mainPage.getSocialElement(siteName).$('a')).toHaveAttribute('href', expectedHref);
        })

        mouseAction.forEach(({ name, value }) => {
            it(`TC-11#2 ${siteName} icon should open the corresponding page on a new tab if clicked with ${name}`, () => {
                mainPage.getSocialElement(siteName).click(value);
                browser.switchWindow(expectedHref);

                expect(browser).toHaveUrl(expectedHref)
                //browser.execute(() => window.close())
                //browser.pause(2000)
                //browser.closeWindow()
                browser.switchWindow(environments.BOOTSTRAP_URL)
            });
        });

    });
});
