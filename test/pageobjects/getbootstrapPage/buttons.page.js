const Page = require('./page')

class Buttons extends Page {
    get primaryButton() {
        return $('button.btn-primary[disabled=""]');
    }
    get activeButton() {
        return $('.btn-primary.active');
    }

    open() {
        return super.open('docs/4.4/components/buttons/#disabled-state');
    }
}

module.exports = new Buttons();