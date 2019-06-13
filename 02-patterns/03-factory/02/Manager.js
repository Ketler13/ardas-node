const Developer = require('./Developer')

class Manager extends Developer {

    constructor(name, money=0, employer='') {
        super(name, money);
        this.employer = employer;
        this.employed = true;
    }

    payDay(money=0) {
        this.money += money;
    }

}

module.exports = Manager;
