class Developer {

    constructor(name='unnamed person') {
        this._name = name;
        this._technologies = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get technologies() {
        return this._technologies.join(', ');
    }

    addOneMoreTechnology(item) {
        this._technologies.push(item);
    }

}

module.exports = Developer;
