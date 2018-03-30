class Logger {

    constructor () {
        this.logs = [];
    }

    get count () {
        return this.logs.length;
    }

    log (message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${ timestamp } - ${ message }`);
    }

}

class Singleton {

    constructor () {
        if (!Singleton.instance)
        {
            Singleton.instance = new Logger();
        }
    }

    getInstance () {
        return Singleton.instance;
    }

}

module.exports = Singleton;
//or
//module.exports = new Logger()
//node js will save that in cache and will give same instance whenever
//imported like var logger = require(./Logger)
