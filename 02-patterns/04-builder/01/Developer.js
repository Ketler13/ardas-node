class Developer {
  constructor(
    name,
    isEmployee = false,
    isManager = false,
    hours = 40,
    money = 0,
    technologies = []
  ) {
    this.name = name;
    this.isEmployee = isEmployee;
    this.isManager = isManager;
    this.hours = hours;
    this.money = money;
    this.technologies = technologies;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Developer;
