const Page = require('./page');

class Dropdowns extends Page {
    get dropdownButton() {
        return $('#dropdownMenuButton1');
    }
    get actionButton() {
        return $('[aria-labelledby="dropdownMenuButton1"] > li:nth-child(1)');
    }
    get anotherActionButton() {
        return $('[aria-labelledby="dropdownMenuButton1"] > li:nth-child(2)');
    }
    get somethingElseHereButton() {
        return $('[aria-labelledby="dropdownMenuButton1"] > li:nth-child(3)');
    }
    get inputField() {
        return $('#search-input');
    }
    get searchItem() {
        return $('.ds-dataset-1 .algolia-docsearch-suggestion--content');
    }
    get searchItems() {
        return $$('.ds-dataset-1 .algolia-docsearch-suggestion--content');
    }
    get overviewSubpage() {
        return $('h2#overview')
    }

    open() {
        return super.open('docs/5.0/components/dropdowns/');
    }
}

module.exports = new Dropdowns();