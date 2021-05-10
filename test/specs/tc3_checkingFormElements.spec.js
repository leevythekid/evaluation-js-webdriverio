const componentsPage = require('../pageobjects/getbootstrapPage/forms.page');


describe('TC-3 - Checking form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Browser title should be "Forms · Bootstrap"', () => {
        expect(browser).toHaveTitle('Forms · Bootstrap');
    });

    it('Readonly input should not be displayed in viewport', () => {
        expect(componentsPage.readonlyInput).not.toBeDisplayedInViewport();
    });

    it('Readonly input should be in viewport after scroll', () => {
        componentsPage.readonlyInput.scrollIntoView();
        expect(componentsPage.readonlyInput).toBeDisplayedInViewport();
    });

    it('Readonly input should be readonly', () => {
        expect(componentsPage.readonlyInput).toHaveElementProperty('readOnly', true);
    });
});
