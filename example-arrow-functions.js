var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => console.log('arrowFunc', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Rubèn'));

// var person = {
//   name: 'Rubèn',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// }
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

var numbers = [ [1, 3], [9, 0] ];

//addStatement
var addStatement = (a, b) => {
  return a + b;
}
//addExpression
var addExpression = (a, b) => a +b;

console.log('add:');
numbers.forEach((num) => console.log(add(num[0], num[1])));
console.log('addStatement:');
numbers.forEach((num) => console.log(addStatement(num[0], num[1])));
console.log('addEpression:');
numbers.forEach((num) => console.log(addExpression(num[0], num[1])));
