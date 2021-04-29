const componentsPage = require('../pageobjects/getbootstrapPage/checkboxesAndRadios.page');


describe('TC-5 - Interaction with radio form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('"Default radio" should be enabled', () => {
        expect(componentsPage.exampleRadios1).toBeEnabled();
    });

    it('"Disabled radio" should be disabled', () => {
        expect(componentsPage.exampleRadios3).not.toBeEnabled();
    });

    it('"Default radio" should be selected', () => {
        expect(componentsPage.exampleRadios1).toHaveElementProperty('checked', true);
    });

    it('"Second default radio" should not be selected', () => {
        expect(componentsPage.exampleRadios2).toHaveElementProperty('checked', false);
    });

    it('Should be able to select radio', () => {
        browser.execute(() => {
            $("header").hide();
        });
        componentsPage.exampleRadios2.click();
        expect(componentsPage.exampleRadios2).toHaveElementProperty('checked', true);
        expect(componentsPage.exampleRadios1).toHaveElementProperty('checked', false);
    });
});
