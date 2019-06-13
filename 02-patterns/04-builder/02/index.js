const DeveloperBuilder = require('./DeveloperBuilder');

// Employees
const john = new DeveloperBuilder('John').makeEmployee().makeManger(60).build();
const david = new DeveloperBuilder('David').makeEmployee().makePartTime().build();
const phil = new DeveloperBuilder('Phil').makeEmployee().build();

// Shoppers
const charles = new DeveloperBuilder('Charles')
    .withMoney(500)
    .withTechnologies(['node', 'react'])
    .build();

const tabbitha = new DeveloperBuilder('Tabbitha').withMoney(1000).build();
