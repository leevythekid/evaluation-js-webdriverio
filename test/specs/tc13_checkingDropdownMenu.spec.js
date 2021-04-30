const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page');


describe('TC-13 - Interaction with dropdown elements', () => {
    before(() => {
        dropdownPage.open();
    });

    it('Dropdown button should be clickable', () => {
        expect(dropdownPage.dropdownButton).toBeClickable();
    });

    it('Dropdown Item#1-2-3 should not be displayed by default', () => {
        expect(dropdownPage.dropdownItem1).not.toBeDisplayed();
        expect(dropdownPage.dropdownItem2).not.toBeDisplayed();
        expect(dropdownPage.dropdownItem3).not.toBeDisplayed();
    });

    it('Dropdown Item#1-2-3 should be displayed if Dropdown button is clicked', () => {
        dropdownPage.dropdownButton.click();
        expect(dropdownPage.dropdownItem1).toBeDisplayed();
        expect(dropdownPage.dropdownItem2).toBeDisplayed();
        expect(dropdownPage.dropdownItem3).toBeDisplayed();
    });
});