// Symbol test
//
console.log("Symbols");
let a1 = Symbol("a");
console.log(a1);
console.log(a1.toString());
console.log(a1.description);
let a2 = Symbol("a");
console.log(a2);
console.log(a2.toString());
console.log(a2.description);
console.log(a1 == a2);
console.log();

// Global Symbol
console.log("Global Symbols");
let empid = Symbol.for("empo"); // if symbol did not exist, creates one
let empidAgain = Symbol.for("empo");
console.log(empid === empidAgain);

// Non Primitive Datatypes

// Objects
console.log("Objects");
let smartPhone = {
	name: "Galaxy S21",
	brand: "Samsung",
	platform: "Android",
};
console.log(smartPhone);
console.log();

// Arrays
console.log("Arrays");
let arr = new Array();
//OR
let arr2 = [];
console.log(arr == arr2);
console.log(arr === arr2);

// Can hold multiple data types
arr = [1, 2, 3, "four"];
console.log(arr);
console.log();
// Operators
// Unary, binary, and ternary

// Arithmetic Operator
// + - * / % ++ --
// + is also concat for String operands

// Assignment Operator
// = += -= *= /= %=

// Relational or Comparison Operators
// > >= < <= == !=

// Strict Equality
console.log("Strict Equality");
let v1 = 10;
let v2 = "10";

console.log(v1 == v2);
console.log(v1 === v2);
console.log();

// Logical Operators
console.log("logical operators");
console.log(!(10 > 20)); // true
console.log(10 > 5 && 20 > 20); // false
console.log(10 > 5 || 20 > 20); // true
console.log();

// typeof Operator
console.log("typeof operator");
console.log(typeof "JavaScript"); // String
console.log(typeof 10.5); // Number
console.log(typeof 10 > 20); // Boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // Object
console.log(typeof { item: 500 }); // Object
console.log();

// Expressions vs Statements
"Hello" + "World"; // Expression
let statement = "Hello" + "World"; // Statement

// Types of Statements
// Non-Conditional Statements
console.log("non conditional statements");
// Comment
// Single line Comment
/* This is
   a multiline comment
*/

// Break Statements
let counter = 0;
for (let i = 0; i < 5; i++) {
	if (i === 3) break;
	counter++;
}
console.log("Break Statement");
console.log(counter); // 3
console.log();

counter = 0;
for (let i = 0; i < 5; i++) {
	if (i === 3) continue;
	counter++;
}
console.log("Continue Statement");
console.log(counter); // 4
console.log();

// Conditional Statements
// Ternary
console.log("Ternary");
console.log(true ? "print if true" : "print if false"); // "print if true"
console.log(false ? "print if true" : "print if false"); // "print if false"
console.log();

// &&
console.log("&&");
console.log(true && "pls print if true"); // "pls print if true"
console.log(false && "pls print if true"); // prints "false" not sure why
console.log();

// Switch Statement
let expression = 2;
switch (expression) {
	case 1:
		console.log("case 1");
		break;
	case 2:
		console.log("case 2");
		break;
	case 3:
		console.log("case 3");
		break;
	default:
		console.log("would print this if not the other 3");
}

/* JavaScript Engine can execute JavaScript code in two different modees:

Immediate Mode:
   As soon as the webpage loads on the browser, JavaScript code embedded inside it executes without any delay
Deferred Mode:
   Execution of JavaScript code is deferred or delayed until any user action like data input, button click, drop-down selection, etc. takes place
*/

// Functions
console.log("Functions");

function multiply(n1, n2) {
	return n1 * n2;
}
console.log("invoking function: multiply");
console.log(multiply(6, 7));
console.log();

// Arrow Function
// In JS, functions are first-class objects. Can assign a function as a value to a variable
console.log('Arrow Function, assigned to "hellowWorldFunction()"');
let helloWorldFunction = () => {
	console.log("hello world!~!!!!!!!");
};

helloWorldFunction();
console.log();

// Syntatic Variations
console.log("syntatic variations");
console.log("#1: multi-line, multi-variable");
let calculateCost = (variableCost, people) => {
	let totalCost = variableCost * people;
	return totalCost;
};
console.log(calculateCost.toString());
console.log();

console.log("#2: No parameter, single line");
let trip = () => "This trip bout to be RAD";
console.log(trip.toString());
console.log();

console.log("#3: One parameter, single line");
let yah = (yahweh) => "Trip to " + yahweh;
console.log(yah.toString()); // Techniquely doesn't need parenthesis, but linter is insistent
console.log();

console.log("#4: One parameter, single line");
let no = (_) => "Trip to " + _;
console.log(no.toString());

// This keyword with Arrow Functions
const myObject = {
	items: [1],
	myMethod() {
		console.log(this == myObject); // true
		console.log(this === myObject); // true, because "this" represents the object/instance itself
		this.items.forEach(function () {
			console.log(this === myObject); // false, because
			// console.log(this === window); // true (in browsers only, not node), because here, "this" points to global object
		});
	},
};

myObject.myMethod();

const myArrowObject = {
	items: [1],
	myMethod() {
		console.log(this == myObject); // true
		console.log(this === myObject); // true, because "this" represents the object/instance itself
		this.items.forEach(() => {
			console.log(this === myObject); // true, arrow functions do no have their own "this". Value taken from outside the arrow function
			// console.log(this === window); // false (in browsers only, not node), because arrow functions do not have their own "this"
		});
	},
};

// Function Parameters
console.log("function parameters");
function multiply(num1, num2) {
	if (num2 == undefined) {
		num2 = 1;
	}
	return num1 * num2;
}

console.log(multiply(5, 6)); // 30
console.log("only 1st param", multiply(5)); // JavaScript doesn't care that the full list of parameters weren't provided
console.log();

// Default Parameter Assignment
function multiply2(num1, num2 = 1) {
	return num1 * num2;
}

console.log("Default Param Assignment");
console.log(multiply2(5, 5)); // 25
console.log("no second param", multiply(10)); // 10
console.log("undefined in 2nd param", multiply(10, undefined)); // 10
console.log();

// Rest Paramters (Same as varargs in java)
function showNums(a, b, ...c) {
	return c;
}

console.log(showNums(1, 2, 3, 4, 5));
console.log(showNums(3, 4, 5, 6, 7, 8, 9, 10));
console.log();

// Destructuring Assignment
console.log("Destructuring");
let myArray = ["Andrew", "James", "Chris"];
console.log("Array Destructuring");
function showDetails([arg1, arg2]) {
	console.log(arg1); // Andrew
	console.log(arg2); // James
}

showDetails(myArray);
console.log();

// Object Destructuring
console.log("Object Destructuring");
let myObject2 = { name: "Mark", age: 25, country: "India" };

function showDetails2({ name, country }) {
	console.log(name, country);
}

showDetails2(myObject2);
console.log();

// Private Functions
function privateFunctions(message) {
	let userMsg = message;
	// Nested functions are private to the container function function and cannot be invoked from outside the container function
	function toUser(userName) {
		let name = userName;
		let greet = userMsg + " " + name;
		return greet;
	}
	userMsg = toUser("Bob");
	return userMsg;
}

console.log(privateFunctions("The world says hello, dear: "));
console.log();

// Built-in Functions (Many are browser only)
// alert() - Throws an alert box, is often used when user interaction is required to decide whether execution should proceed or not
// confirm() - Throws a confirm box where user can click "OK" or "Cancel". If "OK" is clicked, the function returns "true", else returns "false"
// prompt() - Produces a box where user can enter an input. The user input may be used for some processing later. This function takes parameter of type string which represents the label of the box
// isNaN() - This function checks if the data-type of given paramter is number or not. If number, it returns "false", else it returns "true"
// ifFinite() - It determines if the number given as parameter is a finite number. If the parameter value is NaN, positive infinity, or negative infinitiy, this method will reutnr false
// parseInt(num, radix) - num is the string rep of a number. raidx is the numerical system to be used. Will stop parsing when it runs into a non-num character
// parseFloat() - prases string representation of float
// eval() - Takes an argument of string which can be an expression, statement or sequence of statements and evaluates them.

// setTimeout(function, milliseconds) - function to be executed, milliseconds to wait before executing function
// console.log("setTimeout");
// setTimeout(helloWorldFunction, 3000);
// console.log();

// clearTimeout(timeoutID) - cancels out previously established setTimeout
console.log("clearTimeout()");
let timerId = setTimeout(helloWorldFunction, 3000);
clearTimeout(timerId);
console.log();

// setInterval() - Executes given function repetitively
// console.log("setInterval()");
// let intervalId = setInterval(helloWorldFunction, 500);

// function stopInterval() {
// 	clearInterval(intervalId);
// 	console.log("ADIOS!");
// }

// setTimeout(stopInterval, 2000);
// console.log();

// SCOPES
//Global
var thisIsAGlobalVariable = "GLOBAL BB";
console.log("Global Scoped Variables");
function message2() {
	console.log(thisIsAGlobalVariable); // can access global variable outside function
}
message2();

// Local
console.log("local");
function message3() {
	var localV = "Asdf"; // cannot be accessed outside of message3()
}

// block scope
console.log("block scope");
function blockScope() {
	if (10 == 10) {
		var flag = "true";
	}
	console.log(flag);

	if (10 == 10) {
		let flaggy = "true";
	}
	// console.log(flaggy); // throws error.
}
blockScope();
console.log();
let testtt = 30 + undefined;

// Classes
class Calculator {
	constructor(num1, num2) {
		this.num1 = num1; // 'this' keyword is the way to instantiate a variable in the scope of the class
		this.num2 = num2;
	}
	static display() {
		console.log("Calc app");
	}

	add() {
		return this.num1 + this.num2;
	}

	subtract() {
		return this.num1 - this.num2;
	}
}

Calculator.display();
let calc = new Calculator(300, 100);
console.log("add(): " + calc.add());
console.log("add(): " + calc.subtract());

class Vehicle {
	constructor(make, model) {
		this.make = make;
		this.model = model;
	}
}

class Car extends Vehicle {
	constructor(make, model, regNo, fuelType) {
		super(make, model);
		this.regNo = regNo;
		this.fuelType = fuelType;
	}
	getDetails() {
		console.log(`${this.make},${this.model},${this.regNo},${this.fuelType}`);
	}
}

let c = new Car("Hundai", "i10", "KA-016447", "Petrol");
c.getDetails();
console.log();

// Events
// click -> onClick() -> When user clicks element, the event handler onclick handles it)
// keypress -> onKeyPress -> When the user presses the keyboard's key, event handler onkeypress handles it
// keyUp -> onKeyUp -> When the user releases the keybaords key, the event handler onkeyup handles it
// load -> onLoad -> When HTML document is loaded in the browser, event handler onload handles it
// blur -> onBlur -> When an element loses focus, the event handler onblur handles it
// change -> onChange -> When the selection of checked state change for input, select or text-area element changes, event handler onchange handles it

console.log("Events");
console.log("syntax: <html-element eventHandler='JavaScript code'");
console.log("<p onclick='executeMe();'> TK MONEYYY</p>");

console.log();

// Exception Handling
console.log("Exception");
function swapChat() {
	try {
		throw "is an throw";
	} catch (e) {
		console.log(e);
	}
}

swapChat();

// Objects
let myCar = {
	name: "Fiat",
	model: "VXI",
	color: "red",
	numberOfGears: 5,
	currentGear: 3,
	currentSpeed: 45,
	accelerate: function (speedCount) {
		this.currentSpeed = this.currentSpeed + speedCounter;
		return this.currentSpeed;
	},

	brake: function (speedCounter) {
		this.currentSpeed = this.currentSpeed - speedCounter;
		return this.currentSpeed;
	},
};
console.log();

// old and newer syntax
console.log("Old and New Syntax");
let objName = "Arnold";
let age = 65;
let country = "USA";
let obj = {
	objName: objName,
	age: age,
	country: country,
};

let obj2 = {
	objName,
	age,
	country,
};

console.log(obj);
console.log(obj2);
console.log();

// Dynamic Property
console.log("Dynamic Property");
let personalDetails = {
	name: "Stian Kirkeberg",
	country: "Norway",
};

let dynamicProperty = "age";
personalDetails[dynamicProperty] = 45;
console.log(personalDetails.age);

let personalDetails2 = {
	name: "Stian Kirkeberg",
	country: "Norway",
	[dynamicProperty]: 45,
};

console.log(personalDetails2.age);
console.log();

// Function Constructor for Creating Objects
console.log("Function Constructor for Creating Objects");

function FunctionCar(
	name,
	model,
	color,
	numberOfGears,
	currentSpeed,
	currentGear
) {
	this.name = name;
	this.model = model;
	this.color = color;
	this.numberOfGears = numberOfGears;
	this.currentSpeed = currentSpeed;
	this.currentGear = currentGear;
}
console.log();

// Combining objects with Spread Operator
console.log("Combining objects w/ spread operator");
let object1 = {
	trait1: "trait1",
};

let object2 = {
	trait2: "trait2",
};

let combinedObject = {
	...object1,
	...object2,
};

console.log(object1);
console.log(object2);
console.log(combinedObject);
console.log();

let copyOfObject1 = { ...object1 };

// combining objects using spread operator
console.log("Combining and Cloning Objects using Spread Operator");
console.log(JSON.stringify(object1) === JSON.stringify(copyOfObject1)); // true, key-values==same
console.log(object1 === copyOfObject1); // false not same object in memory
console.log();

// Destructuring

let destructureExample = { name: "Arnold", age: 65, country: "USA" };
let { name: currName, age: currentAge } = destructureExample; // variable currentAge instantiated from destructured obj
console.log("Destructuring Example");
console.log(destructureExample);
console.log(currentAge); // 65
console.log(currName);
console.log();

// Object Destructuring in functions
function destructuringFunction({ country }) {
	console.log(country);
}

console.log("Destructured Functions");
destructuringFunction(destructureExample); //USA

// Accessing Object Properties
// Dot operator
console.log("Dot Operator");
let accessExample = {
	accessVar: "accessVariable",
	accessFn: function () {
		return "this is actually a function";
	},
};

console.log("dot - state: " + accessExample.accessVar);
console.log("dot - function: " + accessExample.accessFn());
console.log("bracket - state: " + accessExample["accessVar"]);
console.log("bracket - function: " + accessExample["accessFn"]());
console.log();

// For each w/ objects
console.log("For each w/ objects");
for (key in accessExample) {
	console.log("key: " + key);
	console.log("dot val: " + accessExample.key); // undefined, don't do this
	console.log("bracket val: " + accessExample[key]);
}
console.log();

// Global Objects
console.log("Global objects");
console.log("Dates");
let dateObject1 = new Date();
console.log("Date is: " + dateObject1);
console.log();
let dateObject2 = new Date(2020, 5, 18); // June 18th, 2020. Months 0 indexed for some reason
console.log(dateObject2);
console.log();

// Date Methods
console.log("Date Getter Methods");
console.log(dateObject2.getDate()); // 18
console.log(dateObject2.getDay()); // 4
console.log(dateObject2.getFullYear()); // 2020
console.log(dateObject2.getHours()); // 0
console.log(dateObject2.getMonth()); // 5 - indexed at 0 for some reason
console.log(dateObject2.getMilliseconds()); // 0
console.log(dateObject2.getTime()); // big num in milli
console.log();

// Setter Methods
console.log("Date Setter Methods");
console.log("Setter for everything Getter EXCEPT setDay()");
console.log();

// String
console.log("String");
let myString = "Hello world";
console.log("myString: ", myString);
console.log("myString.length (property): ", myString.length);
console.log("myString.charAt(3): ", myString.charAt(3));
let myString2 = ", Tyler";
console.log("myString2: ", myString2);
console.log("myString.concat(myString2): ", myString.concat(myString2));
console.log("myString.indexOf('w'): ", myString.indexOf("w"));
console.log("myString.match(/world/): ", myString.match(/world/));
console.log(
	'myString.replace("Hello", "Bye"): ',
	myString.replace("Hello", "Bye")
);
console.log("myString.search(' '): ", myString.search(" "));
console.log("myString.split(' '): ", myString.split(" "));
console.log("myString.slice(0,5): ", myString.slice(0, 5));
console.log("myString.slice(6): ", myString.slice(6));
console.log("substring() same as slice but cannot accept negative params");
console.log("myString.substr(1,4): ", myString.substr(1, 4));
console.log("myString.toLowerCase(): ", myString.toLowerCase());
console.log("myString.toUpperCase(): ", myString.toUpperCase());
console.log();

// Math
console.log("Math");
console.log("Math.PI: ", Math.PI);
console.log("Math.SQRT2: ", Math.SQRT2);
console.log(".sqrt(), .round(), .random(), .floor(), .ceil(), .min(), .max()");
console.log();

// JSON
console.log("JSON");
console.log("QUIRKY: must put JSON objects in double quotes");
console.log();

// Browser Object Model
// Document Object - Methods
console.log("Document Object Model methods");
console.log("document.getElementById('p1') -> grabs element by id - p1");
console.log("document.getElementsByTagName('p') -> grabs every p tag");
console.log(
	"document.getElemntsByClassName('myClass') -> grabs every tag by having the class 'myClass'"
);
console.log("document.querySelectorAll('p.blue')");
console.log("document.getElementById().innerHTML");
console.log();

console.log("Document Object Model Properties");
console.log(
	".style(.color), .attributes([n].value), .setAttribute('class', 'whatToSet')"
);
console.log();

// Window Object
console.log("Window Object");
console.log("window.innerHeight");
console.log("window.innerWidth");
console.log("window.outerHeight -> includes toolbars and scrollbars");
console.log("window.outerWidth -> includes toolbars and scrollbars");
console.log(
	"localStorage.setItem('username', 'Bob') -> sets localStorage w/o expiration"
);
console.log(
	"sessionStorage.setItem('password','BOBBYBOI) -> sets objects and data only for current session"
);
console.log(
	"window.open(), window.close() -> opens new window, closes current window"
);
console.log();

// History
console.log(
	"History -> specially made to access window property -> window.history"
);
console.log("history.length -> num of elements in history list");
console.log(".back() -> loads previous URL");
console.log(".forward() -> loads next URL in history list");
console.log(
	".go() -> 'loads previous URL present at the the given number from the history list'"
);
console.log();

// Navigation
console.log("navigator");
console.log("navigator.appName -> returns name of the client");
console.log(
	"navigator.appVersion -> returns platform (OS) and version of client (browser)"
);
console.log("navigator.platform -> returns name of user's OS only");
console.log(
	"navigator.userAgent -> returns string equivalent to HTTP user-agent"
);
console.log();

// Location
console.log("location -> contains info about curr URL in browser window.");
console.log("location.href -> returns URL as string");
console.log("location.hostname -> returns hostname of URL");
console.log("location.port -> returns port of URL");
console.log("location.pathname -> returns pathname of URL");
console.log("location.assign(url) -> loads new HTML document");
console.log("location.reload() -> reloads webpage");
console.log();

// DOM Nodes
console.log("DOM Nodes");
console.log(
	"document.body.parentNode -> returns a Node object that is the parent node of the specified Node."
);
console.log();

// Iterables
console.log("Arrays");
let arrayLiteral = ["Red", "Orange", "Yellow"];
let arrayConstructor = new Array(3);
console.log(arrayLiteral);
console.log(arrayConstructor);
console.log();

// combining and cloning arrays with spread operator
console.log("Combining and Cloning Arrays");
let numArr = [10, 5, 20];
let numArr2 = [1, 2, 3];
let numArr3 = [...numArr, ...numArr2];
console.log(Math.max(...numArr));
console.log(numArr3);
let numArr4 = [...numArr];
console.log(
	numArr,
	numArr4,
	numArr == numArr4,
	numArr.values == numArr4.values
);
console.log();

// Destructuring Arrays
console.log("Destructuring Arrays");
let empArr = [123, "abc"];
let [empNum, empName] = empArr;
console.log(empArr);
console.log(empName);
console.log(empNum);
console.log();

// Array methods
console.log("Array Methods");
let arrMethods = [0, 2, 3, 7, 8, 9];
console.log("Array: " + arrMethods);
console.log("arr.length: " + arrMethods.length);
console.log("arr.push(10): " + arrMethods.push(10));
console.log("arr.pop(): " + arrMethods.pop());
console.log("arr: " + arrMethods);
console.log("arr.shift(): ", arrMethods.shift());
console.log("arr: ", arrMethods);
console.log("arr.unshift(100): ", arrMethods.unshift(100));
console.log("arr: ", arrMethods);
console.log("arr.splice(2,0,'Linux'): ", arrMethods.splice(2, 1, "Linux"));
console.log("arr: ", arrMethods);
console.log("arr.slice(3,6): ", arrMethods.slice(3, 6));
console.log("arr.concat(arr, arr2): exists but not demonstrating");
console.log("arr.indexOf('Linux'): ", arrMethods.indexOf("Linux"));
let result = arrMethods.find((e) => e === 7);
console.log(result);
result = arrMethods.findIndex((e) => e === 7);
console.log(result);
console.log(arrMethods.filter((e) => e > 6));
console.log(arrMethods.map((e) => e / 2));
console.log(arrMethods.reduce((accumulator, val) => accumulator + val));
console.log("");

// async/await > promises > callbacks
console.log(
	"Promise => object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value"
);

var promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("success");
	}, 2000);
});

promise.then(
	function (data) {
		console.log(data + " received in 2 seconds");
	},
	function (error) {
		console.log(error);
	}
);

console.log("callback hell/nested functions");
console.log();

// async/await
console.log("async/await");
async function helloAsync() {
	return "Hello Async";
}

helloAsync().then((val) => console.log(val));

async function helloAsyncPR() {
	return Promise.resolve("Hello Async Promise.resolve()");
}
helloAsyncPR().then((val) => console.log(val));

function sayAfter2Seconds(x) {
	return new Promise((result) => {
		setTimeout(() => {
			result(x);
		}, 2000);
	});
}

async function awaitExample() {
	let x = await sayAfter2Seconds("HALLO");
	console.log(x);
}

awaitExample();
