const formPage = require('../pageobjects/getbootstrapPage/forms.page');


describe('TC-7 - Checking select form elements', () => {
    beforeEach(() => {
        formPage.open()
    });

    it('Should have simple select', () => {
        expect(formPage.exampleSelect1.isDisplayed()).to.equal(true);
    });

    it('Should have multi-select', () => {
        expect(formPage.exampleSelect2.getProperty('multiple')).to.equal(true);
    });

    it('Should have proper selected value by default', () => {
        expect(formPage.exampleSelect1.getProperty('value')).to.equal('1');
    });

    it('Should not have given option "Hello"', () => {
        expect(formPage.exampleSelect1.$('option=Hello').isExisting()).to.equal(false);
    });

    it('Should have given option "2"', () => {
        expect(formPage.exampleSelect1.getProperty('2')).to.be.ok;
    });

    it('Should be able to select a value in simple select', () => {
        formPage.exampleSelect1.selectByVisibleText('2');
        expect(formPage.exampleSelect1.getProperty('value')).to.equal('2');
    });

    it('Should have all options', () => {
        expect(formPage.exampleSelect1.getProperty('length')).to.equal(5);
    });
});
