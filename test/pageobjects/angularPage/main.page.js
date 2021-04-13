const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get angularLogoNavBar() {
        return $('.nav-link.home img');
    }
    get angularLogoHeroSection() {
        return $('.hero-logo img');
    }
    get heroHeadline() {
        return $('.hero-headline');
    }
    get getStartedButton() {
        return $('.homepage-container .button');
    }
    get search() {
        return $('[aria-label="search"]');
    }

    socialElement(socialElementName) {
        return $(`.toolbar-external-icons-container [title=${socialElementName}]`);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    }

    clickGetStartedButton() {
        this.getStartedButton.click();
    }
}

module.exports = new MainPage();
