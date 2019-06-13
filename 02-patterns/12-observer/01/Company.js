class Company {
  constructor(name) {
    this.name = name;
  }

  position(position) {
    console.log(`New position in ${this.name}: ${position}!`);
  }
}

module.exports = Company;
