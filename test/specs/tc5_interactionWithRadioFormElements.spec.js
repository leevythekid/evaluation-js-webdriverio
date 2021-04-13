const componentsPage = require('../pageobjects/getbootstrapPage/checkboxesAndRadios.page');


describe('TC-5 - Interaction with radio form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('"Default radio" should be enabled', () => {
        expect(componentsPage.exampleRadios1.isEnabled()).to.equal(true);
    });

    it('"Disabled radio" should be disabled', () => {
        expect(componentsPage.exampleRadios3.isEnabled()).to.equal(false);
    });

    it('"Default radio" should be selected', () => {
        expect(componentsPage.exampleRadios1.getProperty('checked')).to.equal(true);
    });

    it('"Second default radio" should not be selected', () => {
        expect(componentsPage.exampleRadios2.getProperty('checked')).to.equal(false);
    });

    it('Should be able to select radio', () => {
        browser.execute(() => {
            $("header").hide();
        });
        componentsPage.exampleRadios2.click();
        expect(componentsPage.exampleRadios2.getProperty('checked')).to.equal(true);
        expect(componentsPage.exampleRadios1.getProperty('checked')).to.equal(false);
    });
});
