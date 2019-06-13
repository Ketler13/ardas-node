const Developer = require('./Developer');
const Iterator = require('./Iterator');

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key...');

const inventory = new Iterator([
    new Developer("John", "RabbitMQ"),
    new Developer("Samantha", "Vue"),
    new Developer("Patrick", "Vue"),
    new Developer("Sam", "Backbone"),
    new Developer("Igor", "React"),
    new Developer("Ibrahim", "Angular"),
    new Developer("Ramin", "Node"),
    new Developer("Julia", "Redis")
]);

process.stdin.on('keypress', (str, key) => {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch(key.name) {

        case 'right' :
            inventory.next().writeLn();
            break;

        case 'left' :
            inventory.prev().writeLn();
            break;

        case 'down' :
            inventory.last().writeLn();
            break;

        case 'up' :
            inventory.first().writeLn();
            break;

        case 'c' :
            if (key.ctrl) {
                process.exit()
            }
    }

});
