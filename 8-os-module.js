const os = require('os');
// info about current user
const user = os.userInfo();
//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}seconds`);
const currentOa = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOa);