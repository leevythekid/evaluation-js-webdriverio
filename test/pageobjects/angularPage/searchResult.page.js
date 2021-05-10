class SearchResult {

    get searchResultItem() {
        return $('.search-result-item');
    }
    get searchResultItems() {
        return $$('.search-result-item');
    }
    get directiveSpan() {
        return $('span=Directive');
    }
}

module.exports = new SearchResult();