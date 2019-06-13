class Agency {

    constructor() {
        this.positions = [];
    }

    notify(companyName, position) {
        this.positions.push({ companyName, position });
    }

}

module.exports = Agency;
