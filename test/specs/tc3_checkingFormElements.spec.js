const componentsPage = require('../pageobjects/getbootstrapPage/forms.page');


describe('TC-3 - Checking form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Browser title should be "Forms · Bootstrap"', () => {
        expect(browser.getTitle()).to.equal('Forms · Bootstrap');
    });

    it('Readonly input should not be displayed in viewport', () => {
        expect(componentsPage.readonlyInput.isDisplayedInViewport()).to.equal(false);
    });

    it('Readonly input should be in viewport after scroll', () => {
        componentsPage.readonlyInput.scrollIntoView();
        expect(componentsPage.readonlyInput.isDisplayedInViewport()).to.equal(true);
    });

    it('Readonly input should be readonly', () => {
        expect(componentsPage.readonlyInput.getProperty('readOnly')).to.equal(true);
    });
});
