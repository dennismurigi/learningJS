console.log('avocado');

// variables
// var(global)
// let(non global can re-assign value), 
// const(non global cannot re-assign value)
let avocado;
avocado = 'parachichi';
console.log(avocado);

// String, Numbers ,Boolean, null, undefined
const name = 'Dennis Mwangi';
const age = 25;
const rating = 8.75;
const isCool = true;
const x = null;
const y = undefined; //similar to initializing let without a value
let z;
console.log(typeof name,typeof age,typeof rating,typeof isCool,typeof x,typeof y,typeof z)

//Concatenation
console.log('My name is ' + name + ', I am ' + age + ' years old');
//template strings
const hello = `My score is ${rating} and me being cool is ${isCool}`;
console.log(hello);

//properties dont have parenthesis, methods do.
console.log(hello.toUpperCase().substring(0, 16));
console.log(hello.length);
let likes = 'tech, web design, dancehall';
console.log(likes.split(', '));

/* Arrays
variables that hold multiple  values
*/

const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'pineapples';
fruits.push('mangoes');
fruits.unshift('strawberries');
console.log(fruits[1], fruits[3], fruits[4], fruits[0], fruits.indexOf('strawberries'));

//object literals
const user = {
    name: 'Dennis Mwangi',
    age: '25',
    hobbies: ['dancing', 'music'],
    address:{
        box: '123',
        town: 'kerugoya'
    }
}
user.email = 'me@dennismwangi.com'
console.log(user)

const toDos = [
    {
        id: '1',
        item: 'meet ken'
    },
    {
        id: '2',
        item: 'meet boss'
    }
]
console.log(toDos[0].item)

//JSON has double qoutes around both the var and value

//loops
for(let toDo of toDos){
    console.log(toDo.item)
}

