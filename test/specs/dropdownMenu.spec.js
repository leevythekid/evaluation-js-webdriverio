const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page');

describe('Dropdown elements', () => {
    before(() => {
        dropdownPage.open();
    });

    it('TC-09 Dropdown button should be displayed', () => {
        expect(dropdownPage.dropdownButton).toBeDisplayed();
    });

    it('TC-10 Dropdown button should be clickable', () => {
        expect(dropdownPage.dropdownButton).toBeClickable();
    });

    it('TC-11 Dropdown Item#1-2-3 should not be displayed by default', () => {
        expect(dropdownPage.dropdownItem1).not.toBeDisplayed();
        expect(dropdownPage.dropdownItem2).not.toBeDisplayed();
        expect(dropdownPage.dropdownItem3).not.toBeDisplayed();
    });

    it('TC-12 Dropdown Item#1-2-3 should be displayed if Dropdown button is clicked', () => {
        dropdownPage.dropdownButton.click();
        expect(dropdownPage.dropdownItem1).toBeDisplayed();
        expect(dropdownPage.dropdownItem2).toBeDisplayed();
        expect(dropdownPage.dropdownItem3).toBeDisplayed();
    });
});
