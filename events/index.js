//TODO 1
const { EventEmitter }= require('events');

const birthdayEventListener = ({name, umur}) => {
    console.log(`Happy birthday ${name}! yang ke ${umur}`);
}

//TODO 2
const myEmitter = new EventEmitter();

//TODO 3
myEmitter.on('birthday', birthdayEventListener);

//TODO 4
myEmitter.emit('birthday', { name: 'Dimas', umur: 25});

