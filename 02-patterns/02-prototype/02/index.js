const hipsterPrototype = require('./hipsterPrototype');

const john = hipsterPrototype.clone();
john.name = 'John Snow';
john.addOneMoreTechnology('redis');

const lGaga = hipsterPrototype.clone();
lGaga.name = 'Lady Gaga';
lGaga.addOneMoreTechnology('kubernetes');

console.log( `${john.name}: ${john.technologies}` );
console.log( `${lGaga.name}: ${lGaga.technologies}` );
