const formPage = require('../pageobjects/getbootstrapPage/forms.page');


describe('TC-7 - Checking select form elements', () => {
    beforeEach(() => {
        formPage.open()
    });

    it('Should have simple select', () => {
        expect(formPage.exampleSelect1).toBeDisplayed();
    });

    it('Should have multi-select', () => {
        expect(formPage.exampleSelect2).toHaveElementProperty('multiple', true);
    });

    it('Should have proper selected value by default', () => {
        expect(formPage.exampleSelect1).toHaveElementProperty('value', "1");
    });

    it('Should not have given option "Hello"', () => {
        expect(formPage.exampleSelect1.$('option=Hello')).not.toBeExisting();
    });

    it('Should have given option "2"', () => {
        expect(formPage.exampleSelect1.getProperty('2')).toBeTruthy();
    });

    it('Should be able to select a value in simple select', () => {
        formPage.exampleSelect1.selectByVisibleText('2');
        expect(formPage.exampleSelect1).toHaveElementProperty('value', '2');
    });

    it('Should have all options', () => {
        expect(formPage.exampleSelect1).toHaveElementProperty('length', 5);
    });
});
