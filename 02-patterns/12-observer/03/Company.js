class Company {

    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    position(position) {
        this.subscribers.forEach(observer => observer.notify(this.name, position));
    }

}

module.exports = Company;
