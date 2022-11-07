const os = require('os');

//Info about current User
const user = os.userInfo();
console.log(user);

//Method returns system runtime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem()
}

console.log(currentOS)
