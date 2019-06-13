const Company = require('./Company');
const Developer = require('./Developer');
const Agency = require('./Agency');

const google = new Company("Google");
const facebook = new Company("Facebook");

const john = new Developer("John");
const dick = new Developer("Dick");
const patrick = new Developer("Patrick");
const lucy = new Developer("Lucy");

const superITAgency = new Agency();

google.subscribe(john);
google.subscribe(dick);
google.subscribe(lucy);
google.subscribe(superITAgency);

facebook.subscribe(patrick);
facebook.subscribe(superITAgency);

google.position("Node.js developer");
facebook.position("Linux devops");

console.log( superITAgency.positions );
