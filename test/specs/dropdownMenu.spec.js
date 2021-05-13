const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page');

describe('Dropdown elements', () => {
    before(() => {
        dropdownPage.open();
    });

    it('TC-10 Dropdown button should be displayed and clickable', () => {
        expect(dropdownPage.dropdownButton).toBeDisplayed();
        expect(dropdownPage.dropdownButton).toBeClickable();
    });

    it('TC-11 Dropdown button should be closed by default', () => {
        expect(dropdownPage.dropdownButton.getAttribute('aria-expanded')).toBe('false');
    })

    it('TC-12 Dropdown button should be opened after click', () => {
        if(dropdownPage.dropdownButton.getAttribute('aria-expanded') == 'false'){
            dropdownPage.dropdownButton.click();
        }

        expect(dropdownPage.dropdownButton.getAttribute('aria-expanded')).toBe('true');
    })

    it('TC-13 Dropdown Item#1-2-3 should not be displayed by default', () => {
        if(dropdownPage.dropdownButton.getAttribute('aria-expanded') == 'true'){
            dropdownPage.dropdownButton.click();
        }

        expect(dropdownPage.actionButton).not.toBeDisplayed();
        expect(dropdownPage.anotherActionButton).not.toBeDisplayed();
        expect(dropdownPage.somethingElseHereButton).not.toBeDisplayed();
    });

    it('TC-14 Dropdown Item#1-2-3 should be displayed if Dropdown button is clicked', () => {
        if(dropdownPage.dropdownButton.getAttribute('aria-expanded') == 'false'){
            dropdownPage.dropdownButton.click();
        }

        expect(dropdownPage.actionButton).toBeDisplayed();
        expect(dropdownPage.anotherActionButton).toBeDisplayed();
        expect(dropdownPage.somethingElseHereButton).toBeDisplayed();
    });
});
