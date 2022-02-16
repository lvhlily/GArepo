//wait for the DOM elements to load before executing
document.addEventListener('DOMContentLoaded', function(event) {



    // Create a function that runs whenever the submit button is clicked. The thing we click on is the "e"
    function processTheMood(e){
        console.log("I'm processing the mood");
        console.log(e);

        //prevent the submit button from refreshing the page
        e.preventDefault();

        //Create a variable called moodvalue and get the VALUE of the #mood input in the HTML moodform
        let moodvalue = document.querySelector("#mood").value;

        //Correct for capitalization & trim for spaces
        moodvalue = moodvalue.toLowerCase().trim();

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        if (moodvalue == "excited" || moodvalue == "ecstatic" || moodvalue == "fantastic"){
            document.querySelector(".moodring > div").setAttribute("class", "excited");
        }

        // if the user inputs bad / angry change the CSS class to 'bad'
        else if (moodvalue == "bad" || moodvalue == "angry"){
            document.querySelector(".moodring > div").setAttribute("class", "bad");
        }

        // if the user inputs happy / good / great change the CSS class to 'happy'
        else if (moodvalue == "happy" || moodvalue == "good" || moodvalue == "great"){
            document.querySelector(".moodring > div").setAttribute("class", "happy");
        }

    };
    // Listen for user interaction on the submit button.
    document.querySelector("#submit-btn").addEventListener("click", processTheMood);

});