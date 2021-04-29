const buttonPage = require('../pageobjects/getbootstrapPage/buttons.page')


describe('TC-6 - Checking button form elements', () => {
    beforeEach(() => {
        buttonPage.open();
    });

    it('Should have "Primary button"', () => {
        expect(buttonPage.primaryButton).toBeExisting();
    });

    it('"Primary button" should be disabled', () => {
        expect(buttonPage.primaryButton).not.toBeEnabled();
    });

    it('"Primary link" button should be enabled', () => {
        buttonPage.activeButton.scrollIntoView();
        expect(buttonPage.activeButton).toBeClickable();
    });
});
