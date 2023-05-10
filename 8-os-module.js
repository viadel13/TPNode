const os = require('os')

const user = os.userInfo()

console.log(`disponibilite du syteme es seconde: ${os.uptime()}`)

const caracOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(caracOs)