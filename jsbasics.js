// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//   }


//print 5 in the list
// const list = [1,2,3,4,5,6,7,8,9,10];

// console.log(list[4]);

//print 2,3 in the list
// console.log(list.slice(1, 3));

//push 11 in list
// const list = [1,2,3,4,5,6,7,8,9,10];
// list.push(11);
// console.log(list);


// const list = [1,2,3,4,5,6,7,8,9,10];
// console.log(list[4]);


// const string = "Hello, World!";
// const slicedString = string.slice(7, 12);
// console.log(slicedString); 

// var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// list = [1, 2, 3, 4, 5];
// console.log(list);



// const person = { name: 'Hello' };
// person.name = 'world'; 
// console.log(person); 


//push method added in end of the list
// const fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits);


//pop method removes last element
// const fruits = ["apple", "banana", "orange"];
// const removedFruit = fruits.pop();
// console.log(removedFruit); 
// console.log(fruits); 



// shift method removes first element 
// const fruits = ["apple", "banana", "orange"];
// const removedFruit = fruits.shift();
// console.log(removedFruit); 
// console.log(fruits); 



// unshift adds one or more elements in beginning of an array
// const fruits = ["banana", "orange"];
// fruits.unshift("apple");
// console.log(fruits); 



//splice changing the content by removing or replacing existing elements
// const fruits = ["apple", "orange", "mango"];
// fruits.splice(1, 1, "banana");
// console.log(fruits); 


//concat combine two or more arrays
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = array1.concat(array2);
// console.log(newArray); 



//joins all elements of an array into a string
// const array = ["Hello", "World"];
// const string = array.join(", ");
// console.log(string); 


// const array = [1, 2, 3];
// array.reverse();
// console.log(array); 


// const array = [1, 2, 3];
// const newArray = array.map(element => element * 2);
// console.log(newArray);


// const array = [1, 2, 3, 4, 5];
// const newArray = array.filter(element => element % 2 === 0);
// console.log(newArray); 


// const array = [1, 2, 3, 4, 5];
// const foundElement = array.find(element => element > 2);
// console.log(foundElement);


// const array = [1, 2, 3, 4, 5];
// const allGreaterThanZero = array.every(element => element > 0);
// console.log(allGreaterThanZero);


// const array = [1, 2, 3, 4, 5];
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); 


// const str1 = 'Hello';
// const str2 = "World";
// const str3 = `JavaScript`;

// const string = str1 + ' ' + str2;
// console.log(string);

// const length = str3.length;
// console.log(length);

// const char = str1[0];
// console.log(char); 

// const upperCaseStr = str3.toUpperCase();
// console.log(upperCaseStr);

// const lowerCaseStr = str3.toLowerCase();
// console.log(lowerCaseStr); 

// const str = 'JavaScript';
// const subStr = str.substring(4, 6);
// console.log(subStr); 

// const s1 = 'Hello, World!';
// const newStr = s1.replace('World', 'JavaScript');
// console.log(newStr); 

//escape characters
const specialChar = 'It\'s raining';
console.log(specialChar)

const person = { name: 'hello', age: 30 };

// Using the Object constructor
const car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
console.log(person.name);





// const persons = {
//     name: 'hello',
//     age: 30,
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// }; 
// console.log(persons['address']['city']);

// persons.email = 'hello@example.com'; // Adding a new property
// persons.age = 35; // Modifying an existing property

// console.log(persons);

// for (let key in persons) {
//     console.log(`${key}: ${persons[key]}`);
// }




// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// const greet = function(name) {
//     console.log(`Hello, ${name}!`);
// };


const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

greet('Hi');


















