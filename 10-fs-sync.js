const{readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/first.txt', 'utf8')

writeFileSync('./content/result-sync', `le resultat est : ${first}, ${second}`,
{flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')