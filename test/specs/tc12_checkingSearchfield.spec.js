const dropdownsPage = require('../pageobjects/getbootstrapPage/dropdowns.page');
const utils = require('../../utils/utils');
const mainPage = require('../pageobjects/getbootstrapPage/main.page')

describe("TC-12 - Checking Search bar on dropdowns page", () => {
    before(() => {
        dropdownsPage.open();
    });
    it('Should be displayed', () => {
        expect(dropdownsPage.inputField).toBeVisible();
    });

    it('Should be displayed after scrolled out of view', () => {
        dropdownsPage.overviewSubpage.scrollIntoView();
        browser.pause(1000)
        expect(dropdownsPage.overviewSubpage).toBeDisplayedInViewport();
    });
    
    it('Should be empty by default', () => {
        expect(dropdownsPage.inputField).toHaveValue('')
    });

    it('Search dropdown should include the given word', () => {
        dropdownsPage.inputField.setValue('config');
        dropdownsPage.searchItem.waitForExist();

        let dsdataset1 = $('.ds-dataset-1').getHTML();
        utils.writeToFile(dsdataset1, 'data/ds-dataset-1.html');

        dropdownsPage.searchItems.forEach((element) => {
            expect(element).toHaveTextContaining('config', { ignoreCase: true });
        });
    });
});
