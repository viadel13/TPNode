// npm - global comand, comes with node
//npm version

//local dependency - use it only in this particular project
//npm i <packageName>

//global deoendency - use it in any project

//npm install -g <packageName>

const lodash= require('lodash')

const items = [1, 2, 3, 4]

const newItems = lodash.flatMapDeep(items);

console.log(newItems)