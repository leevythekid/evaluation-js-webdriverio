const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page');

describe('Dropdown elements', () => {
    before(() => {
        dropdownPage.open();
    });

    it('TC-10 Dropdown button should be displayed', () => {
        expect(dropdownPage.dropdownButton).toBeDisplayed();
    });

    it('TC-11 Dropdown button should be clickable', () => {
        expect(dropdownPage.dropdownButton).toBeClickable();
    });

    it('TC-12 Dropdown Item#1-2-3 should not be displayed by default', () => {
        
        expect(dropdownPage.actionButton).not.toBeDisplayed({message: `${dropdownPage.actionButton} should not be displayed`});
        expect(dropdownPage.anotherActionButton).not.toBeDisplayed({message: `${dropdownPage.anotherActionButton} should not be displayed`});
        expect(dropdownPage.somethingElseHereButton).not.toBeDisplayed({message: `${dropdownPage.somethingElseHereButton} should not be displayed`});
    });

    it('TC-13 Dropdown Item#1-2-3 should be displayed if Dropdown button is clicked', () => {
        dropdownPage.dropdownButton.click();
        expect(dropdownPage.actionButton).toBeDisplayed({message: `${dropdownPage.actionButton} should be displayed`});
        expect(dropdownPage.anotherActionButton).toBeDisplayed({message: `${dropdownPage.anotherActionButton} should be displayed`});
        expect(dropdownPage.somethingElseHereButton).toBeDisplayed({message: `${dropdownPage.somethingElseHereButton} should be displayed`});
    });
});
