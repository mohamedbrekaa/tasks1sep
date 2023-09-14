function getDay (day) {
    switch (day){
        case `Friday`:
        console.log(`Weekend`);
        break;

        case `Sunday`:
        case `Monday`:
        case `Tuesday`:
        case `Wednesday`:
        case `Thursday`:
        console.log(`Working day`);
        break;
        case `Saturday`:
        console.log("Weekend");
        break;
        default:
            console.log(`invalid day`);
            break;
    }
}


getDay("Friday")
getDay("Sunday")
getDay("invalid day")





// new task

var person = {
    name: `John Doe`,
    age : 30,
    gender : `Male`
}
console.log(person.name);
console.log(person.age);
console.log(person.gender);

var Shopping = {
    items:  [
        {name: `apple` , quantity: 5},
        {name: `banana` , quantity: 3},
   ]
};
console.log(Shopping.items[0].quantity);
console.log(Shopping.items[1].quantity);
// new task
 var test = {}
test.age = 25
console.log(test);
var test = Object.create({});
test.age = 30
console.log(test);
// new task
var sentence = 'The quick brown fox jumps over the lazy dog';
var word ='fox';
var isWordIncluded = sentence.includes(word);
console.log(isWordIncluded);
// new task
// using map
var numbers = [1,2,3,4,5];

var multipliedNumbers = numbers.map(
    function  (num) {
        return num * 10
    }
)
console.log(multipliedNumbers);
// using filter
var filteredNumbers = numbers.filter(
    function (num){
        return num >= 4
    }
);
console.log(filteredNumbers);
// new task
// object assign
var source = {name: "John", age: 30};
var target ={};
Object.assign(target, source);
console.log(target);
// sort
var fruits = ["apple", "banana", "orange", "grape"];
fruits.sort();
console.log(fruits);

