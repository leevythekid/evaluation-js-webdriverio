const expect = require('chai').expect;
const formPage = require('../pageobjects/getbootstrapPage/forms.page');

describe('TC-7 - Checking select form elements', () => {
    beforeEach(() => {
        formPage.open()
    });

    it('Have simple select', () => {
        expect(formPage.exampleSelect1.isDisplayed()).to.equal(true);
    });

    it('Have multi-select', () => {
        expect(formPage.exampleSelect2.getProperty('multiple')).to.equal(true);
    });

    it('Have proper selected value', () => {
        expect(formPage.exampleSelect1.getProperty('value')).to.equal('1');
    });

    it('Not have given option', () => {
        expect(formPage.exampleSelect1.$('option=Hello').isExisting()).to.equal(false);
    });

    it('Have given option', () => {
        expect(formPage.exampleSelect1.getProperty('2')).to.be.ok;
    });

    it('Select value', () => {
        const select = formPage.exampleSelect1.selectByVisibleText('2');
        expect(formPage.exampleSelect1.getProperty('value')).to.equal('2');
    });

    it('Have all options', () => {
        expect(formPage.exampleSelect1.getProperty('length')).to.equal(5);
    });
});
