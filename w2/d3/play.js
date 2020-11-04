const net = require('net');
const stdin = process.stdin;


const { setupInput } = require('./input');


/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');

console.log('Connecting ...');
connect();

setupInput();