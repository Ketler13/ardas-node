const Developer = require('./Developer');

const hipster = new Developer();
hipster.addOneMoreTechnology('jQuery');
hipster.addOneMoreTechnology('angular');
hipster.addOneMoreTechnology('react');
hipster.addOneMoreTechnology('node');

module.exports = hipster;
