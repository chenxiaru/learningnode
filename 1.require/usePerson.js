// 使用 node usePerson.js 执行该文件
var personData = require('./person.js')
console.log('personData', personData)
console.log('personData', personData.name)

// global是node的全局对象,类似浏览器中的 window
console.log('global', global)