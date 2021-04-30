const Page = require('./page');

class MainPage extends Page {

    get navBar() {
        return $('.navbar');
    }

    getSocialElement(elementName){
        if(elementName.toLowerCase() == 'github')
            return $('ul.navbar-nav:nth-child(3) > li:nth-child(1)');
        if(elementName.toLowerCase() == 'twitter')
            return $('ul.navbar-nav:nth-child(3) > li:nth-child(2)');
        if(elementName.toLowerCase() == 'slack')
            return $('ul.navbar-nav:nth-child(3) > li:nth-child(3)');
        if(elementName.toLowerCase() == 'opencollective')
            return $('ul.navbar-nav:nth-child(3) > li:nth-child(4)');
        
        throw new Error('Invalid Social Element Name.');
    }

    socialElement(socialElementName) {
        return $(`.toolbar-external-icons-container [title=${socialElementName}]`);
    }

    open() {
        return super.open();
    }


}

module.exports = new MainPage();
