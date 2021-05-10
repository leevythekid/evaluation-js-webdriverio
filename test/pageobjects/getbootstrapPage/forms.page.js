const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get readonlyInput() {
        return $('[placeholder="Readonly input here..."]');
    }
    get formControls() {
        return $('h2#form-controls');
    }
    get exampleSelect1() {
        return $('#exampleFormControlSelect1');
    }
    get exampleSelect2() {
        return $('#exampleFormControlSelect2');
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('docs/4.4/components/forms/');
    }
}

module.exports = new FormsPage();
