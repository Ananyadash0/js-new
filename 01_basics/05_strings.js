const name = "Ananya"
const age = 22
// console.log(name + age)

console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String ('ananya-dash')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(1,6)
console.log(newString)

const anotherString = gameName.slice(2,6)
console.log(anotherString)

const newStringOne = "    hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('raj'))
console.log(gameName.split('-'))