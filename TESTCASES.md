# Test cases

Tests will be executed on:

-   [x] Google Chrome
-   [ ] Firefox
-   [ ] IE11.

## `TC-1` Checking landing pages elements

1. **Given** https://angular.io URL is opened
1. **Then** Angular logo in the top navbar should be visible
1. **And** Angular logo in the hero section should be visible
1. **And** text in hero section should be "One framework. Mobile & desktop."
1. **And** Get started button should be visible in the hero section
1. **When** Get started button is clicked in the hero section
1. **Then** the URL should be https://angular.io/start
1. **And** the title on the content should be "Introduction to the Angular Docs"

## `TC-2` Checking search field on landing page

1. **Given** https://angular.io URL is opened
1. **Then** Search input in the top navbar should be visible
1. **And** it should be empty
1. **And** it should be "Search" as placeholder
1. **When** it is clicked in
1. **And** "directive" is typed in it
1. **Then** clear icon should be visible in it
1. **And** "Directive" should be listed in the "API" section
1. **When** "Directive" is clicked in the "API" section
1. **Then** the URL should be https://angular.io/api/core/Directive
1. **And** the title on the content should be "Directive"

## `TC-3` Checking form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/ URL is opened
1. **Then** title of the browser should be "Forms · Bootstrap"
1. **And** The readonly input should not be in the viewport
1. **When** The readonly input is scrolled into the viewport
1. **Then** The readonly input should be in the viewport
1. **And** The readonly input should be readonly

## `TC-4` Interaction with checkbox form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened
1. **Then** The default checkbox should be enabled
1. **And** The disabled checkbox should be disabled
1. **And** The default checkbox should be unchecked
1. **When** The default chdckbox is clicked on
1. **Then** The default checkbox should be checked

## `TC-5` Interaction with radio form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened
1. **Then** The default radio should be enabled
1. **And** The disabled radion should be disabled
1. **And** The default radio should be selected
1. **And** The second default radio should not be selected
1. **When** The second default radio is clicked on
1. **Then** The default radio should be not selected
1. **And** The second default radio should be selected

## `TC-6` Checking button form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state URL is opened
1. **Then** There should be a button with text "Primary button"
1. **And** The primary button should be disabled
1. **When** the page is scrolled down 1 page
1. **Then** The active primary link button should not be disabled

## `TC-7` Checking select form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/#form-controls URL is opened
1. **Then** The example select should be visible
1. **And** The example multiple select should be a multiple select
1. **And** The selected option in example select should be "1"
1. **And** there should not be option like "hello" in example select
1. **And** there should be option like "2" in example select
1. **When** The option "2" is selected in example select
1. **Then** The selected option in example select should be "2"
1. **And** Thu number of options in example select should be 5


## `TC-8` Checking social elements

1. **Given** https://angular.io/ URL is opened
1. **Then** There should be a Twitter icon displayed
1. **And**  It should have a {href} attribure with value: https://twitter.com/angular
1. **And** There should be a GitHub icon displayed
1. **And**  It should have a {href} attribure with value: https://github.com/angular/angular
1. **And** There should be a YouTube icon displayed
1. **And**  It should have a {href} attribure with value: https://youtube.com/angular


## `TC-9` Checking dropdown elements

1. **Given** https://getbootstrap.com/docs/4.4/components/dropdowns/ URL is opened
1. **Then** The Dropdown button should be clickable
1. **And** Dropdown items should not be displayed by default
1. **When** The Dropdown button is clicked
1. **Then** The dropdown items should be displayed


## `TC-10` Checking the Twitter icon

1. **Given** https://angular.io/ URL is opened
1. **Then** The Twitter icon should be visible
1. **When** The Twitter icon is clicked with the mousewheel
1. **And** Window is switched to https://twitter.com/angular
1. **Then** The window URL should be https://twitter.com/angular


## `TC-11` Checking search bar on Docs page

1. **Given** https://getbootstrap.com/docs/5.0/getting-started/introduction/ URL is opened
1. **When** "config" is typed into the searchbox
1. **And** 1000ms is waited
1. **Then** New elements should be displayed with texts that include string "config"


## `TC-12` Checking search bar on Icons page

1. **Given** https://icons.getbootstrap.com/ URL is opened
1. **When** 'align' is typed into the searchbox
1. **Then**  Only elements should be visible where the value of the "data-tags" attribute contains 'align'