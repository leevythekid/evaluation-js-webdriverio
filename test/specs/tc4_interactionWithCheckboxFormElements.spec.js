const componentsPage = require('../pageobjects/getbootstrapPage/checkboxesAndRadios.page');
const expect = require('chai').expect;

describe('TC-4 - Interaction with checkbox form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Should have enabled checkbox', () => {
        expect(componentsPage.defaultCheck1.isEnabled()).to.equal(true);
    });

    it('Should have disabled checkbox', () => {
        expect(componentsPage.defaultCheck2.isEnabled()).to.equal(false);
    });

    it('Should have unchecked checkbox', () => {
        expect(componentsPage.defaultCheck1.getProperty('checked')).to.equal(false);
    });

    it('Should be able to check checkbox', () => {
        componentsPage.defaultStacked.scrollIntoView();
        componentsPage.defaultCheck1.click();
        expect(componentsPage.defaultCheck1.getProperty('checked')).to.equal(true);
    });
});
