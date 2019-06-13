const Person = require('./Person')

class Developer extends Person {

    constructor(name, money=0) {
        super(name);
        this.money = money;
        this.employed = false;
    }

}

module.exports = Developer;
