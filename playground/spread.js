// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// // call function with set of arg, but args are in an array
// var toAdd = [9,5];
//
// console.log(add(...toAdd));



// var groupA = ['Jess', 'Jay'];
// var groupB = ['Jeff'];
// // if final = [3, groupA] without three dots. would be an array with 3 and
// // another array [3, ['Jess', 'Jay']]
// // with ... becomes [3, 'Jess', 'Jay']
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Jay', 35];
var personTwo = ['Jess', 33]
function greet (name, age) {
 console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);


var names = ['Mike', 'Ben'];
var final = ['Jay', ...names];

final.forEach(function(name) {
  console.log('Hi ' + name);
});
