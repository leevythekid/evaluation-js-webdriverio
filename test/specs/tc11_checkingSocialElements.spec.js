const mainPage = require('../pageobjects/getbootstrapPage/main.page');
const URLs = require('../../data/URLs.json')
const environments = require('../../data/environments.json')
const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page')

describe('TC-11 - Checking social elements', () => {
    before(() => {
        dropdownPage.open();
    });

    const testData = [
        {siteName: 'Github', expectedHref: URLs.BOOTSTRAP_GITHUB},
        {siteName: 'Twitter', expectedHref: URLs.BOOTSTRAP_TWITTER},
        {siteName: 'Slack', expectedHref: URLs.BOOTSTRAP_SLACK},
        {siteName: 'Opencollective', expectedHref: URLs.BOOTSTRAP_OPENCOLLECTIVE}
    ]
    
    const action = [
        {name: 'left-click', value: {button: 'left'}},
        {name: 'middle-click', value: {button: 'middle'}}
    ]

    testData.forEach(({siteName, expectedHref}) => {
        it(`${siteName} icon should be displayed`, function() {
            expect(mainPage.getSocialElement(siteName)).toBeDisplayed();
        })

        it(`${siteName} icon should point to the corresponding page`, ()  => {
            expect(mainPage.getSocialElement(siteName).$('a')).toHaveAttribute('href', expectedHref);
        });



        action.forEach(({name, value}) => {
            it(`${siteName} icon should open the corresponding page on a new tab if clicked with ${name}`, () => {
                mainPage.getSocialElement(siteName).click(value);
                browser.switchWindow(expectedHref);
    
                expect(browser).toHaveUrl(expectedHref)
                //browser.execute(() => window.close())
                browser.switchWindow(environments.BOOTSTRAP_URL)
            });
        });
        
    });

    /* it('GitHub icon should be displayed', () => {
        expect(mainPage.githubLogo).toBeDisplayed();
    });

    it('GitHub icon should point to the corresponding page', () => {
        expect(mainPage.githubLogo.$('a')).toHaveAttributeContaining('href', URLs.BOOTSTRAP_GITHUB)
    });

    it('GitHub icon should open the corresponding page on a new tab if clicked with left-click', () => {
        mainPage.githubLogo.click({button: 'left'})
        browser.switchWindow(URLs.BOOTSTRAP_GITHUB);

        expect(browser).toHaveUrl(URLs.BOOTSTRAP_GITHUB)
        //browser.execute(() => window.close())
        browser.switchWindow(environments.BOOTSTRAP_URL)
    });

    it('Twitter icon should be displayed', () => {
        expect(mainPage.twitterLogo).toBeDisplayed();
    });

    it('Twitter icon should point to the corresponding page', () => {
        expect(mainPage.twitterLogo.$('a')).toHaveAttributeContaining('href', URLs.BOOTSTRAP_TWITTER)
    });

    it('Slack icon should be displayed', () => {
        expect(mainPage.slackLogo).toBeDisplayed();
    });

    it('Slack icon should point to the corresponding page', () => {
        expect(mainPage.slackLogo.$('a')).toHaveAttributeContaining('href', URLs.BOOTSTRAP_SLACK)
    });

    it('Opencollective icon should be displayed', () => {
        expect(mainPage.opencollectiveLogo).toBeDisplayed();
    });

    it('Opencollective icon should point to the corresponding page', () => {
        expect(mainPage.opencollectiveLogo.$('a')).toHaveAttributeContaining('href', URLs.BOOTSTRAP_OPENCOLLECTIVE)
    }); */
});
