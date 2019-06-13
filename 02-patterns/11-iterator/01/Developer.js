class Developer {
  constructor(name, technology) {
    this.name = name;
    this.technology = technology;
  }

  writeLn() {
    process.stdout.write(`${this.name}: ${this.technology}`);
  }
}

module.exports = Developer;
