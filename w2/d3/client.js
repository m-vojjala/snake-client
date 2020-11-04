const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.on('connect',() => console.log("Successfully connected to game server" ));
  conn.setEncoding('utf8');
  conn.on('connect',() => console.log("Set Encoding \n" ));
  conn.on('connect', () => {conn.write('Name: AAA')}),
  // conn.write("Move: up")})
//  conn.on('connect',()=>setTimeout(()=>conn.write("Move: up"),2000))
  

  conn.on('data', data => console.log("Message from server: ", data));
 

  return conn;
}

console.log('Connecting ...');
connect();

module.exports = {connect};