const iconPage = require('../pageobjects/getbootstrapPage/icon.page');
const expect = require('chai').expect;

describe("TC-12 - Checking Search bar on Icons page", () => {
    before(() => {
        iconPage.open();
    });

    it('Should return the items where the value of the "data-tags" attribute contains the given string', function () {
        iconPage.inputField.setValue('align');

        if (iconPage.searchItems.length > 0) {
            iconPage.searchItems.forEach((element, index) => {
                expect(element.getAttribute('data-tags'), `Error happend at "li" index: ${index}`).to.include('align');
            });
        }

        this.skip();
    });
});