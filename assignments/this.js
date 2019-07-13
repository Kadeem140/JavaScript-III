/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding = When this is used in the global scope, this will be the window or console object.
* 2. Implicit Binding = When dot notation is used on an object within a function.
* 3. Explicit Binding = When dot notation is used on an object outside of the function.
* 4. New Binding =
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const windowFunc = function () {
    return this;
}

console.log(windowFunc());
// Principle 2

// code example for Implicit Binding
const brother = {
    name: "Roshawn",
    age: 25,
    job: "ConEd",
    info: function() {
        return `My brother is name ${this.name}, works for ${this.job} and is ${this.age} years old.`
    } 

}
const brother2 = {
    name: "Curtis",
    age: 37,
    job: "Nutrionist",
    info: function() {
        return `My brother is name ${this.name}, is a ${this.job} and is ${this.age} years old.`
    } 

}
const brother3 = {
    name: "Kashawn",
    age: 3,
    job: "eat & sleep",
    info: function() {
        return `My brother is name ${this.name}, likes to ${this.job} and is ${this.age} years old.`
    } 

}

console.log(brother.info())
console.log(brother2.info())
console.log(brother3.info())

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding

const obj = {num: 2,
            color: 'red',
            color2: 'green' };

const favNum = function (a, b, c) {
        return this.num + a + b + c;
        
}

const favColor = function (color)  {
    return this.color + ' ' + color + ' ' + this.color2 +' are primary colors.'
}

var arr = [3, 108 , 89];
var bound = favNum.bind(obj);

console.log(favNum.call(obj, 2, 3, 4));
console.log(favColor.call(obj, 'blue'));
console.log(favNum.apply(obj, arr));
console.log(bound(80, 90, 100));
