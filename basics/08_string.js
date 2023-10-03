const gameName = new String('love')
const  name = "rahul"
const repoCount=50
console.log(name + repoCount + "value" );// prefer not to use bcoz readbility
// console.log('Hello my name is $ {name} and my repo count is $ {repocount}');\

// console.log(gameName.__proto__);

// console.log(gameName.length);

console.log(gameName.toUpperCase());//upercase output is LOVE bescuse heap method 

console.log(gameName.charAt(3));


const newSring = gameName.substring(0,2)
console.log(newSring);

const anotherString = gameName.slice(-3,2)//reverse print
console.log(anotherString);


const newSringOne = "  rahul   "
console.log(newSringOne);
console.log(newSringOne.trim());


const url = "https://rm.com/rahul"
console.log(url.replace('rahul','love'));

console.log(url.includes('love'));

console.log(gameName.split);