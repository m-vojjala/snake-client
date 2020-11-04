const net = require('net');
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');

const handleUserInput = function(){
  stdin.on('data',(key)=>{
if(key === '\u0003'){
  process.exit();
}
  })
}



const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

setupInput()
handleUserInput()

console.log('Connecting ...');
connect();