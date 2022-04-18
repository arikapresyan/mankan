
// module.exports = function (io) {
//   io.sockets.on('connection', (socket) => {
//     console.log('A user connected');
//
//     // socket.send('Sent a message 4seconds after connection!');
//     socket.on('clientEvent', (d) => {
//       socket.emit('received_data', { data: 'dasdadaddad' });
//     });
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });
// };
