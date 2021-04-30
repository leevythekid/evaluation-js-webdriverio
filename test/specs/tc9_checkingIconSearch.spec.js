const iconPage = require('../pageobjects/getbootstrapPage/icon.page');

describe("TC-9 - Checking Search bar on Icons page", () => {
    before(() => {
        iconPage.open();
    });

    it('Should return the items where the value of the "data-tags" attribute contains the given string', function () {
        iconPage.inputField.setValue('align');
        iconPage.searchItem.waitForExist();

        if (iconPage.searchItems.length > 0) {
            iconPage.searchItems.forEach((element, index) => {
                expect(element).toHaveAttributeContaining('data-tags', 'align');
            });
        } else {
            return this.skip();
        }
    });
});