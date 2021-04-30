class Directive {
    get h1() {
        return $('h1');
    }
    get h1Directive() {
        return $('h1#directive');
    }
}

module.exports = new Directive();