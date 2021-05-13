const dropdownsPage = require('../pageobjects/getbootstrapPage/dropdowns.page');
const utils = require('../../utils/utils');

describe("Search bar on dropdowns page", () => {
    before(() => {
        dropdownsPage.open();
    });
    it('TC-07 Should be displayed and be empty by default', () => {
        expect(dropdownsPage.inputField).toBeDisplayed();
        expect(dropdownsPage.inputField).toHaveValue('');
    });

    it('TC-08 Should be displayed after scrolled out of view', () => {
        dropdownsPage.overviewSubpage.scrollIntoView();
        expect(dropdownsPage.overviewSubpage).toBeDisplayedInViewport();
    });

    it('TC-09 Search popup should include the given word', () => {
        const searchWord = 'config';
        dropdownsPage.inputField.setValue(searchWord);
        dropdownsPage.searchItem.waitForExist();

/*         let dsdataset1 = $('.ds-dataset-1').getHTML();
        utils.writeToFile(dsdataset1, 'data/ds-dataset-1.html'); */

        dropdownsPage.searchItems.forEach((element) => {
            expect(element).toHaveTextContaining(searchWord, { ignoreCase: true });
        });
    });
});
