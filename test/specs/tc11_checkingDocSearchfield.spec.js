const docPage = require('../pageobjects/getbootstrapPage/doc.page');
const utils = require('../../utils/utils');


describe("TC-11 - Checking Search bar on Doc page", () => {
    before(() => {
        docPage.open();
    });

    it('Search dropdown should include the given word', () => {
        docPage.inputField.setValue('config');
        docPage.searchItem.waitForExist();

        let dsdataset1 = $('.ds-dataset-1').getHTML();
        utils.writeToFile(dsdataset1, 'data/ds-dataset-1.html');

        docPage.searchItems.forEach((element) => {
            expect(element).toHaveTextContaining('config', {ignoreCase: true});
        });
    });
});
