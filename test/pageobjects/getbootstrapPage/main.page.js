const Page = require('./page');

class MainPage extends Page {

    get navBar() {
        return $('.navbar');
    }

    getSocialElement(elementName){
        return $(`header a[href*=${elementName}]`);
    }

    open() {
        return super.open();
    }
}

module.exports = new MainPage();
