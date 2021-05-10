const componentsPage = require('../pageobjects/getbootstrapPage/checkboxesAndRadios.page');


describe('TC-4 - Interaction with checkbox form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Should have enabled checkbox', () => {
        expect(componentsPage.defaultCheck1).toBeEnabled();
    });

    it('Should have disabled checkbox', () => {
        expect(componentsPage.defaultCheck2).not.toBeEnabled();
    });

    it('Should have unchecked checkbox', () => {
        expect(componentsPage.defaultCheck1).toHaveElementProperty('checked', false);
    });

    it('Should be able to check checkbox', () => {
        componentsPage.defaultStacked.scrollIntoView();
        componentsPage.defaultCheck1.click();
        expect(componentsPage.defaultCheck1).toHaveElementProperty('checked', true);
    });
});
