const Page = require('./page');

class MainPage extends Page {

    get navBar() {
        return $('.navbar');
    }

    getSocialElement(elementName){
        return $(`header a[href*=${elementName}]`);
    }

    socialElement(socialElementName) {
        return $(`.toolbar-external-icons-container [title=${socialElementName}]`);
    }

    open() {
        return super.open();
    }


}

module.exports = new MainPage();
