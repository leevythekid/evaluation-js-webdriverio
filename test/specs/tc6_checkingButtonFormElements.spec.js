const buttonPage = require('../pageobjects/getbootstrapPage/buttons.page')
const expect = require('chai').expect;

describe('TC-6 - Checking button form elements', () => {
    beforeEach(() => {
        buttonPage.open();
    });

    it('Should have "Primary button"', () => {
        expect(buttonPage.primaryButton.isExisting()).to.equal(true);
    });

    it('"Primary button" should be disabled', () => {
        expect(buttonPage.primaryButton.isEnabled()).to.equal(false);
    });

    it('"Primary link" button should be enabled', () => {
        buttonPage.activeButton.scrollIntoView();
        expect(buttonPage.activeButton.isClickable()).to.equal(true);
    });
});
