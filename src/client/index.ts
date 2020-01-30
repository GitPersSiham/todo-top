import io from 'socket.io-client';

const osu = require('node-os-utils');
const cpu = osu.cpu;

let count = cpu.count(); // gives the number of core (including thread)
let client = io.connect('http://localhost:3000');

async function getCPULoad() {
    cpu.usage()
        .then(cpuPercentage => {
            console.log("cpu load =>", cpuPercentage, count);
            client.send('message received', {'cpuPercentage': cpuPercentage, 'numberOfCore': count});
        })
}

setInterval(getCPULoad, 5000);
