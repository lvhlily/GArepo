// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// Function to turn off all lights

function turnOff(){
    // document | query | id from HTML | class list | remove | CSS element
    document.querySelector('#stopLight').classList.remove('stop');
    document.querySelector('#slowLight').classList.remove('caution');
    document.querySelector('#goLight').classList.remove('go');
}


// Function for stop light
function redLight(){

    // Turn off all lights
    turnOff();

    // Document | query | id from HTML | class list | add | CSS element
    document.querySelector('#stopLight').classList.add('stop');
}




// Function for slow light
function yellowLight(){

    // Turn off all lights
    turnOff();

    document.querySelector('#slowLight').classList.add('caution');
}


// Function for go light
function greenLight(){

    // Turn off all lights
    turnOff();

    document.querySelector('#goLight').classList.add('go');
}




// Listen for click stop
// Document | get element | id from HTML | event listener | click, JS FUNCTION 
document.getElementById('stopButton').addEventListener('click', redLight);

// Listen for click stop
document.getElementById('slowButton').addEventListener('click', yellowLight);

// Listen for click stop
document.getElementById('goButton').addEventListener('click', greenLight);



// Reset function that turns all lights off
// function turnOff(){
//     document.querySelector("#stopLight").classList.remove("stop");
//     document.querySelector("#slowLight").classList.remove("caution");
//     document.querySelector("#goLight").classList.remove("go");
// }


// // Green
// function greenLight(){

//     // Turn everything off
//     turnOff();

//     // Turn green on
//     document.querySelector("#goLight").classList.add("go");

// }
// // Red
// function redLight(){
//     // Turn everything off
//     turnOff();

//     // Turn red on
//     document.querySelector("#stopLight").classList.add("stop");

// }


// // Yellow
// function yellowLight(){
//     // Turn everything off
//     turnOff();
//     // Turn yellow on
//     document.querySelector("#slowLight").classList.add("caution");
// }



// // Bind to red
// document.getElementById('stopButton').addEventListener('click',redLight);

// // Bind to green
// document.getElementById('goButton').addEventListener('click',greenLight);

// // Bind to yellow
// document.getElementById('slowButton').addEventListener('click',yellowLight);