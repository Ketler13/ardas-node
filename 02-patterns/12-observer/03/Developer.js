class Developer {
  constructor(name) {
    this.name = name;
  }

  notify(companyName, position) {
    console.log(
      `${
        this.name
      }, there is a position at ${companyName} - ${position} - hurry up!`
    );
  }
}

module.exports = Developer;
