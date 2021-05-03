const mainPage = require('../pageobjects/getbootstrapPage/main.page');
const URLs = require('../../data/URLs.json')
const environments = require('../../data/environments.json')
const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page')

describe('Checking social elements', () => {
    before(() => {
        dropdownPage.open();
    });

    testSocialElements('1', 'github', URLs.BOOTSTRAP_GITHUB);
    testSocialElements('2', 'twitter', URLs.BOOTSTRAP_TWITTER);
    testSocialElements('3', 'slack', URLs.BOOTSTRAP_SLACK);
    testSocialElements('4', 'opencollective', URLs.BOOTSTRAP_OPENCOLLECTIVE);

    testSocialElementsMouseAction('1', 'github', URLs.BOOTSTRAP_GITHUB, { button: 'left' });
    testSocialElementsMouseAction('2', 'github', URLs.BOOTSTRAP_GITHUB, { button: 'middle' });
    testSocialElementsMouseAction('3', 'twitter', URLs.BOOTSTRAP_TWITTER, { button: 'left' });
    testSocialElementsMouseAction('4', 'twitter', URLs.BOOTSTRAP_TWITTER, { button: 'middle' });
    testSocialElementsMouseAction('5', 'slack', URLs.BOOTSTRAP_SLACK, { button: 'left' });
    testSocialElementsMouseAction('6', 'slack', URLs.BOOTSTRAP_SLACK, { button: 'middle' });
    testSocialElementsMouseAction('7', 'opencollective', URLs.BOOTSTRAP_OPENCOLLECTIVE, { button: 'left' });
    testSocialElementsMouseAction('8', 'opencollective', URLs.BOOTSTRAP_OPENCOLLECTIVE, { button: 'middle' });
});

function testSocialElements(subID, siteName, expectedURL) {
    it(`TC-03#${subID} ${siteName} icon should be displayed and have proper href value`, () => {
        expect(mainPage.getSocialElement(siteName)).toBeDisplayed();
        expect(mainPage.getSocialElement(siteName)).toHaveAttribute('href', expectedURL);
    })
}

function testSocialElementsMouseAction(subID, siteName, expectedURL, mouseAction) {
    it(`TC-04#${subID} ${siteName} icon should open the corresponding page on a new tab if clicked with ${mouseAction.button}-click`, () => {
        mainPage.getSocialElement(siteName).click(mouseAction);
        browser.switchWindow(expectedURL);

        expect(browser).toHaveUrl(expectedURL)
        //browser.execute(() => openedWindow.close())
        //browser.closeWindow()
        browser.pause(1000)
        //browser.switchWindow(environments.BOOTSTRAP_URL)
    });
}
