const buttonPage = require('../pageobjects/getbootstrapPage/buttons.page')
const expect = require('chai').expect;

describe('TC-6 - Checking button form elements', () => {
    beforeEach(() => {
        buttonPage.open();
    });

    it('Have primary button', () => {
        expect(buttonPage.primaryButton.isExisting()).to.equal(true);
    });

    it('Have disabled button', () => {
        expect(buttonPage.primaryButton.isEnabled()).to.equal(false);
    });

    it('Have not disabled button', () => {
        buttonPage.activeButton.scrollIntoView();
        expect(buttonPage.activeButton.isClickable()).to.equal(true);
    });
});
