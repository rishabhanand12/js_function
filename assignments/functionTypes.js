// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//Function Declaration
function param(number) {
  return number +1;
}
//Function Expression
let param = function(number) {
  return number +1;
};

//Arrow Function
let param = (number) => number + 1;

//Arrow Function with Curly bracket
let param = (number) => {
  return number + 1;
};

//Function Invocation
param(2); // 3


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//Function Declaration
function param(number) {
  return number - 1;
}
//Function Expression
let param = function(number) {
  return number - 1;
};

//Arrow Function
let param = (number) => number - 1;

//Arrow Function with Curly bracket
let param = (number) => {
  return number - 1;
};

//Function Invocation
param(2); // 1


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//Function Declaration
function param(number1, number2) {
  return number1 + number2;
}
//Function Expression
let param = function(number1, number2) {
  return number1 + number2;
};

//Arrow Function
let param = (number1, number2) => number + number2;

//Arrow Function with Curly bracket
let param = (number1, number2) => {
  return number1 + number2;
};

//Function Invocation
param(2,1); // 3


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//Function Declaration
function param(number1, number2) {
  return number1 - number2;
}
//Function Expression
let param = function(number1, number2) {
  return number1 - number2;
};

//Arrow Function
let param = (number1, number2) => number - number2;

//Arrow Function with Curly bracket
let param = (number1, number2) => {
  return number1 - number2;
};

//Function Invocation
param(2,1); // 1




/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 //Function Declaration
function param(number1, number2) {
  return number1 * number2;
}
//Function Expression
let param = function(number1, number2) {
  return number1 * number2;
};

//Arrow Function
let param = (number1, number2) => number * number2;

//Arrow Function with Curly bracket
let param = (number1, number2) => {
  return number1 * number2;
};

//Function Invocation
param(2,1); // 2




/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Declaration
function param(number1, number2) {
  return number1 / number2;
}
//Function Expression
let param = function(number1, number2) {
  return number1 / number2;
};

//Arrow Function
let param = (number1, number2) => number / number2;

//Arrow Function with Curly bracket
let param = (number1, number2) => {
  return number1 / number2;
};

//Function Invocation
param(2,1); // 2



/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//Function declaration
function param(number) {
  return number**2;
}

//Function Expression
let param = function(number) {
  return number**2;
};

//Arrow functions
let param = (number) => number**2;

//Arrow functions with curly brackets
let Param = (number) => {
  return number**2;
};

//Function Invocation
param(2); // 4


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

//Function Declaration
function param(operator, x, y) {
  switch(operator) {
   case "+":
   return x + y;
   break;   

   case "-":
   return number1 - number2;
   break;   

   case "*":
   return number1 * number2;
   break;   

   case "/":
   return number1 / number2;
   break;   
  }
  
}
//Function Expression
let param = function(operator, number1, number2) {
  switch(operator) {
    case "+":
    return number1 + number2;
    break;   
 
    case "-":
    return number1 - number2;
    break;   
 
    case "*":
    return number1 * number2;
    break;   
 
    case "/":
    return number1 / number2;
    break;   
   }
};



//Arrow Function with Curly bracket
let param = (operator, number1, number2) => {
  switch(operator) {
    case "+":
    return number1 + number2;
    break;   
 
    case "-":
    return number1 - number2;
    break;   
 
    case "*":
    return number1 * number2;
    break;   
 
    case "/":
    return number1 / number2;
    break;   
   }
};

//Function Invocation
param("+", 2, 1); // 3


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
//Function declaration
function param(a, b) {
  if(a > b) {
    return true;
  }
}

//Function expression
let param = function(a, b) {
  if(a > b) {
    return true;
  }
};
//Arrow function 
let param = (a, b) => (a > b)? true:false;

//Arrow Function with curly brackets
let param = (a, b) => {
  if(a > b) {
    return true;
  }
};

//Function invocation
param(1,2); // false

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//Function declaration
function param(a, b) {
  if(a < b) {
    return true;
  }
}

//Function expression
let param = function(a, b) {
  if(a < b) {
    return true;
  }
};
//Arrow function 
let param = (a, b) => (a < b)? true:false;

//Arrow Function with curly brackets
let param = (a, b) => {
  if(a < b) {
    return true;
  }
};

//Function invocation
param(1,2); // true



/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 //Function declaration
function param(a, b) {
  if(a == b) {
    return true;
  }
}

//Function expression
let param = function(a, b) {
  if(a == b) {
    return true;
  }
};
//Arrow function 
let param = (a, b) => (a == b)? true:false;

//Arrow Function with curly brackets
let param = (a, b) => {
  if(a == b) {
    return true;
  }
};

//Function invocation
param(1,2); // false


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 //Function declaration
function param(a, b) {
  if(a > b) {
    return b;
  } else {
    return a;
  }
}

//Function expression
let param = function(a, b) {
  if(a > b) {
    return b;
  } else {
    return a;
  }
};
//Arrow function 
let param = (a, b) => (a > b)? b: a;

//Arrow Function with curly brackets
let param = (a, b) => {
  if(a > b) {
    return b;
  } else {
    return a;
  }
};

//Function invocation
param(1,2); // 1


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
 //Function declaration
 function param(a, b) {
  if(a < b) {
    return b;
  } else {
    return a;
  }
}

//Function expression
let param = function(a, b) {
  if(a < b) {
    return b;
  } else {
    return a;
  }
};
//Arrow function 
let param = (a, b) => (a < b)? b: a;

//Arrow Function with curly brackets
let param = (a, b) => {
  if(a < b) {
    return b;
  } else {
    return a;
  }
};

//Function invocation
param(1,2); // 2



/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Function declaration
function even(n) {
  if(n%2==0) {
    return true;
  } else {
    return false;
  }
}

//Function expression
let even = function(n) {
  if(n%2==0) {
    return true;
  } else {
    false;
  }
};

//Arrow function
let even = (n) => (n%2==0)? true:false;

//Arrow function with curly brackets
let even = (n) => {
  if(n%2==0) {
    return true;
  } else {
    return false;
  }
};

//Function invocation 
even(4); // true


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 //Function declaration
function odd(n) {
  if(n%2!=0) {
    return true;
  } else {
    return false;
  }
}

//Function expression
let odd = function(n) {
  if(n%2!=0) {
    return true;
  } else {
    false;
  }
};

//Arrow function
let even = (n) => (n%2!=0)? true:false;

//Arrow function with curly brackets
let odd = (n) => {
  if(n%2!=0) {
    return true;
  } else {
    return false;
  }
};

//Function invocation 
odd(4); // false

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//Function declaration
function grade (score, total) {
  var grade = (score/total)*100;
  switch(true)
  {
    case(grade<= 100 && grade>= 90):
    return "A";
    break;
    case(grade<= 89 && grade>= 80):
    return "B";
    break;
    case(grade<= 79 && grade>= 70):
    return "C";
    break;
    case(grade<= 69 && grade>= 60):
    return "D";
    break;
    case(grade<= 59 && grade>= 0):
    return "F";
    break;
  }
}

//Function expression
let grade = function(score, total) {
  var grade = (score/total)*100;
  switch(true)
  {
    case(grade<= 100 && grade>= 90):
    return "A";
    break;
    case(grade<= 89 && grade>= 80):
    return "B";
    break;
    case(grade<= 79 && grade>= 70):
    return "C";
    break;
    case(grade<= 69 && grade>= 60):
    return "D";
    break;
    case(grade<= 59 && grade>= 0):
    return "F";
    break;
  }
};

//Arrow function
let grade = (score, total) => {
  var grade = (score/total)*100;
  switch(true)
  {
    case(grade<= 100 && grade>= 90):
    return "A";
    break;
    case(grade<= 89 && grade>= 80):
    return "B";
    break;
    case(grade<= 79 && grade>= 70):
    return "C";
    break;
    case(grade<= 69 && grade>= 60):
    return "D";
    break;
    case(grade<= 59 && grade>= 0):
    return "F";
    break;
  }
};

//Function invocation
grade(90, 100); // A

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
//Function decleration 
function join(string1, string2) {
  return string + " " + string2;
}

//Function expression
let join = function(string1, string2) {
  return string + " " + string2;
};

//Arrow Function
let join = (string1, string2) => string + " " + string2;

//Arrow Function with curly brackets
let join = (string1, string2) => {
  return string + " " + string2;
};

//Function invocation
join("Hello", "World"); //Hello World