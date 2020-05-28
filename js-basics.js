console.clear();
//  I'm a single line comment
/*
    I'm a multi-line comment
*/

//  Mutable variables (can change)
var dontUseTheseAnymore = true;
let useThisInstead = true; //   scoped to blocks {}

//  Non-mutable variables (cannot change)
const useTheseAsMuchAsPossible = true;

//  Error handling
try {
    useTheseAsMuchAsPossible = false;
} catch (e) {
    console.log(e.toString());
}
console.log("Hello");

let outsideBlock = "Look at me";
{
    console.log(outsideBlock);
    let insideBlock = "You con't see me";
}

try {
    console.log(insideBlock);
} catch (e) {
    console.error(e.toString());
}

if (true) {
    let name = "Scott Baron";
}

try {
    console.log(name);
} catch (e) {
    console.error(e.toString());
}

//  Arrays
const arr = [1, 3, 5]; //   array literal
console.log(arr);

try {
    arr = "Scott";
} catch (e) {
    console.error(e.toString());
}

arr[1] = 6;
console.log(arr);

//  Objects
const obj = {
    name: 'Scott',
    age: 35,
    dob: '1984,12,18',
    'my name' : 'SCH'
};

console.log(obj['name']);
console.log(obj.name);
console.log(obj['my name']);

//  Control structures
let direction;
if (obj.age > 20) {
    direction ="down";
} else {
    direction = "up";
}
console.log("It's all " + direction + " hill from here");
console.log(`It's all ${direction} hill from here`);
console.log(`
    Hello Dave
    How are you today?
    `);

switch (direction) {
    case 'up':
        console.log("Go get em tiger");
        break;
    default:
        console.log("You better rest.");
}

switch (true) {
    case 5 < 7:
        console.log("yep");
        break;
}

// Loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let item of ['a', 'b', 'c']) {
    console.log(item);
}

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// Functions
function sayHello (name) {
    console.log (`Hello, ${name}`);
}
sayHello('Scott');
const helloFunc = sayHello;
console.log(helloFunc);
helloFunc('Dave');