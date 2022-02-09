// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

function squared(victim){

    // Multiply the param by itself
    let output = victim * victim;

    // Send the value back
    return output;
}

console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));



// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)


function squared(victim){

    // Hardwire a return value of 0 if victim != number
    if(typeof victim != "number"){
        return 0;
    }

    // Multiply the param by itself
    let output = victim * victim;

    // Send the value back
    return output;
}

console.log(squared("Parrots"));
console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));



// 2. Get string length!
// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5


function stringLength(victim){

    // Create a variable to hold the string length
    let theLength = 0;

    // Get the length of the string
    theLength = victim.length;

    // Return the value
    return theLength
}


console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// OR //

function stringLength(victim){
    return victim.length;
}



// VALIDATE //


function stringLength(victim){

    let myLength = victim.length;

    // If not a number, hardwire 0
    if(typeof myLength == "number"){
        return myLength;
    }
    else{
        return 0;
    
    }
}

console.log(addNumbers("testing"));
console.log(addNumbers(6, 3));
console.log(addNumbers(true));
console.log(addNumbers(1.22, 1.55))





// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers(number1, number2){

    // Add numbers
    let answer = number1 + number2

    // Return addition
    return answer
}

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));


// VALIDATE INPUTS //

function addNumbers(number1, number2){

    // If not a number, parseFloat
    if(typeof number1 != "number"){
        number1 = parseFloat(number1)
        
        // If not a number, return NaN, exit
        if(isNaN(number1)){
            return NaN;
        }

    }

    if(typeof number2 != "number"){
        number2 = parseFloat(number2)
        
        if(isNaN(number2)){
            return NaN;
        }
    }

    // Add numbers
    let answer = number1 + number2

    // Return addition
    return answer
}

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));
console.log(addNumbers("dogs", "cats"));
console.log(addNumbers(1.22, 1.55))

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function sayHello(name){

    // Concat the strings
     let output = "Hello, " + name

    // Return output
    return output;
}

console.log(sayHello("Paul"));