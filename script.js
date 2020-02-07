// Destructuring
const obj1 = {
    player: 'bobby',
    experience: 100,
    wizardlevel: false
}
const {player, experience} = obj1
let {wizardlevel} = obj1

console.log(player, experience)
console.log(wizardlevel)


// Object properties
const name = 'John'
const obj2 = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
}
console.log(obj2);

const a = 'Simon'
const b = true
const c = {}

const obj3 = {
    a,
    b,
    c
}
console.log(obj3);


// Default arguments
function greet(name = '', age = 20, pet = 'dog') {
    console.log(`Hello ${name}, you seem to be ${age}. What a lovely ${pet} you have`)
}
greet();
greet('John', 40, 'cat')


// Symbol
let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
console.log(sym1);
console.log(sym2);
console.log(sym3);

console.log(sym2 === sym3)


// Arrow functions
function add1(a, b) {
    return a + b
}
console.log(add1(4, 2))

const add2 = (a, b) => a + b
console.log(add2(4, 2))


// Advanced functions
const first = () => {
    const greet = 'Hi'
    const second = () => {
        // alert(greet)
    }
    return second
}
const newFunc = first()
newFunc()


// Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
console.log(curriedMultiply(3))
console.log(curriedMultiply(3)(4))

const multiplyBy5 = curriedMultiply(5)
console.log(multiplyBy5(3));
console.log(multiplyBy5(10));


// Compose
const compose = (f, g) => (a) => f(g(a))

const sum = (num) => num + 1

console.log(compose(sum, sum)(5))


// Advanced arrays
const array = [1, 2, 10, 16]
// reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)
console.log(reduceArray);


// Advanced objects
// Reference type
let object1 = {value: 10}
let object2 = object1
let object3 = {value: 10}

// Context
console.log(this);
// this.alert('Hello')
const object4 = {
    a: function () {
        console.log(this);
    }
}
object4.a()

// Instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name
        this.type = type
    }
    introduce() {
        console.log(`Hi I'm ${this.name} and I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`I'm a ${this.type}`);
    }
}

const wizard1 =  new Wizard('Shelly', 'Healer')
const wizard2 =  new Wizard('Shawn', 'Dark MAgic')

wizard1.introduce()
wizard1.play()
wizard2.introduce()
wizard2.play()


//ES7
const pets = ['dog', 'cat', 'bird', 'fish']
console.log(pets.includes('bird'));

const square = (x) => x**2
console.log(square(2));
const cube = (y) => y**3
console.log(cube(2));


//ES8
console.log('Bird'.padStart(10));
console.log('Bird'.padEnd(10));

Object.values
Object.entries
Object.keys

let obj4 = {
    username0: 'Santa',
    username1: 'Rudolf',
    username3: 'Mr.Grinch'
}
Object.keys(obj4).forEach((key, index) => {
    console.log(key, obj4[key]);
})

Object.values(obj4).forEach(value => console.log(value))

Object.entries(obj4).forEach(value => console.log(value))  // Object to Array

console.log(Object.entries(obj4).map(value => value[1] + value[0].replace('username', '')))


// ES10
// flat()
const array1 = [1, 2, 3, 4, 5]
console.log(array1.flat());

const array2 = [1, [2, 3, 4], 5]
console.log(array2.flat());

const array3 = [1, [2, [3], 4], 5]
console.log(array3.flat());

const array4 = [1, [2, [3], 4], 5]
console.log(array4.flat(2));  // --> Array.flat() or Array.flat(1) is default, but Array.flat(2) tells us to how deep we want to .flat this array

const entries = ['Bob', 'John',,,,, 'Jeff']
console.log(entries.flat());  // It cleanse an array

// flatMap()
const arr = ['1', ['2', ['3'], '4'], '5']
const arrChaos = arr.flatMap(num => num + 3)
console.log(arrChaos);

// trimStart(), trimEnd()
const email1 = '    john.doe@gmail.com'
const email2 = 'Bob.znj@gmail.com     '
console.log(email1.trimStart());
console.log(email2.trimEnd());

// Object.fromEntries()
const players = [['Lui-G', 19], ['Timbo', 23], ['Kasa', 21], ['voxmflr', 23]]
console.log(Object.fromEntries(players));  // Array to Object

// try and catch
try {
    console.log(4 + 5)
}
catch {
    console.log('You messed up');
}

try {
    console.log(bob + 2);
}
catch {
    console.log('You messed up');
}


// Modules
// ES6 + Webpack2

// js1
export const add = (a, b) => a + b
// or
export default function add() {
    return a + b
}

// js2
import { add } from './add'
// or
import add from './add'