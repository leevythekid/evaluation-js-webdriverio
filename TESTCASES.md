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
1. **Then** search input in the top navbar should be visible
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
1. **And** the readonly input should not be in the viewport
1. **When** the readonly input is scrolled into the viewport
1. **Then** the readonly input should be in the viewport
1. **And** the readonly input should be readonly

## `TC-4` Interaction with checkbox form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened
1. **Then** the default checkbox should be enabled
1. **And** the disabled checkbox should be disabled
1. **And** the default checkbox should be unchecked
1. **When** the default chdckbox is clicked on
1. **Then** the default checkbox should be checked

## `TC-5` Interaction with radio form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened
1. **Then** the default radio should be enabled
1. **And** the disabled radion should be disabled
1. **And** the default radio should be selected
1. **And** the second default radio should not be selected
1. **When** the second default radio is clicked on
1. **Then** the default radio should be not selected
1. **And** the second default radio should be selected

## `TC-6` Checking button form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state URL is opened
1. **Then** there should be a button with text "Primary button"
1. **And** the primary button should be disabled
1. **When** the page is scrolled down 1 page
1. **Then** the active primary link button should not be disabled

## `TC-7` Checking select form elements

1. **Given** https://getbootstrap.com/docs/4.4/components/forms/#form-controls URL is opened
1. **Then** the example select should be visible
1. **And** the example multiple select should be a multiple select
1. **And** the selected option in example select should be "1"
1. **And** there should not be option like "hello" in example select
1. **And** there should be option like "2" in example select
1. **When** the option "2" is selected in example select
1. **Then** the selected option in example select should be "2"
1. **And** the number of options in example select should be 5


## `TC-8` Checking the Twitter icon

1. **Given** the https://angular.io/ URL is opened
1. **Then** the Twitter icon should be visible
2. **And** the Twitter icon should be clickable
3. **When** the Twitter icon is clicked with the mousewheel
4. **And** the window is switched to https://twitter.com/angular
5. **Then** the window URL should be https://twitter.com/angular


## `TC-9` Checking search bar on Icons page

1. **Given** the https://icons.getbootstrap.com/ URL is opened
2. **Then** an input field should be dispayed
3. **And** the input filed should be empty
4. **When** 'align' string is typed into the searchbox
5. **Then**  only elements should be visible where the value of the "data-tags" attribute contains 'align'



## `TC-01` Checking header visibility
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **Then** the header should be displayed


## `TC-02` Checking header visibility after scroll down
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **When** the page is scrolled down with the size of the header's height
3. **Then** the header should not be displayed in viewport 


## `TC-03` Checking header visibility after scroll down then up
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **When** the page is scrolled down to the dropdown button
3. **And** the page is scrolled up
4. **Then** the header should be displayed in viewport 


## `TC-04` Checking social elements visibility and href attribute
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **Then** there should be a *socialPageName* icon displayed
3. **And** it should have a {href} attribure with value: *socialPageURL*

|subID|socialPageName|socialPageURL                         |
|-----|--------------|--------------------------------------|
|1    |GitHub        |https://github.com/twbs               |
|2    |Twitter       |https://twitter.com/getbootstrap      |
|3    |Slack         |https://bootstrap-slack.herokuapp.com/|
|4    |Opencollective|https://opencollective.com/bootstrap  |


## `TC-05` Checking if the corresponding social page opens after left or middle mouse click
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
3. **When** the *socialPageName* icon is clicked with the *mouseAction* mouse button
4. **Then** the *socialPageURL* should be opened on a new window

|subID|socialPageName|socialPageURL                         |mouseAction|
|-----|--------------|--------------------------------------|-----------|
|1    |GitHub        |https://github.com/twbs               |left       |
|2    |GitHub        |https://github.com/twbs               |middle     |
|3    |Twitter       |https://twitter.com/getbootstrap      |left       |
|4    |Twitter       |https://twitter.com/getbootstrap      |middle     |
|5    |Slack         |https://bootstrap-slack.herokuapp.com/|left       |
|6    |Slack         |https://bootstrap-slack.herokuapp.com/|middle     |
|7    |Opencollective|https://opencollective.com/bootstrap  |left       |
|8    |Opencollective|https://opencollective.com/bootstrap  |middle     |


## `TC-06` Checking search field visibility
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
1. **Then** the input field should be displayed


## `TC-07` Search field should be empty by default
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
4. **Then** by default the input field should be empty


## `TC-08` Search field should be visible after scrolled out of view
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **When** the page is scrolled down by the height of the search field
3. **Then** the search field should be still visible


## `TC-09` Every popup item should include the given word case insetively 
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **When** the 'config' string is entered to the input field
3. **And** {waitForTimeout} milliseconds is waited for elements to appear in the DOM
4. **Then** all the items appeared in the search result popup should contain the string 'config' case insensitively


## `TC-10` Check if dropdown button is visible
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **Then** the dropdown button should be displayed


## `TC-11` Check if dropdown button is clickable
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **Then** the dropdown button should be clickable


## `TC-12` Check if dropdown subitems are visible by default
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **Then** the dropdownItem1 should not be displayed by default
3. **And** the dropdownItem2 should not be displayed by default
4. **And** the dropdownItem3 should not be displayed by default


## `TC-13` Check if dropdown subitems are visible after clicking the Dropdown button
1. **Given** the https://getbootstrap.com/docs/5.0/components/dropdowns/ URL is opened
2. **When** the dropdown button is clicked with the left mouse button
3. **Then** the dropdownItem1 should be displayed
4. **And** the dropdownItem2 should be displayed
5. **And** the dropdownItem3 should be displayed



