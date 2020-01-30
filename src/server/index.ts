import SocketIO from 'socket.io';

const io: SocketIO.Server = SocketIO();

let infosCPU: Array<any> = [];

io.on('connection', (socket: SocketIO.Socket) => {
    socket.on('message', (message, content) => {
        console.log('message received', message, content);
        infosCPU.push(content);
        socket.broadcast.emit('cpu usage', content)
    })
});

io.listen(3000);
