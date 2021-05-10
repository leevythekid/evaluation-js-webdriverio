const fsLibrary = require('fs');

class Utils {

    writeToFile(source, dest) {
        fsLibrary.writeFile(dest, source, (error) => {
            if (error) throw error;
        });
    }

    appendToFile(source, dest) {
        fsLibrary.appendFile(dest, source, (error) => {
            if (error) throw error
        });
    }
}

module.exports = new Utils();