
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "9Zh2UlA6ujnXlgTaT9oBWl8hqE901LVH";

async function giphySearch(e) {

  // prevent the page from submitting/reloading
  e.preventDefault();

  // get the user input from the form
  const searchQ = document.querySelector("#search-form input[type='text']").value;

  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)

  const theRequest = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchQ;

  const response = await fetch(theRequest);

  // convert your response data into .json()
  const theLargeResponseJSON = await response.json();

  // print your data to the console to see its format, dont forget to delete later
  // console.log(theLargeResponseJSON.data[0]);


  // clear out all gifs from previous searches
  document.querySelector("#giphy-results").innerHTML = "";

  // use a loop to create and append each image to the dom
  for(let i=0; i<theLargeResponseJSON.data.length; i++){

  // creating new image and setting src and alt
  let newImage = document.createElement("img");
  newImage.setAttribute('src', theLargeResponseJSON.data[i].images.original.url);
  newImage.setAttribute('alt', theLargeResponseJSON.data[i].title);

  // append new image to giphy-results div in HTML
  document.querySelector("#giphy-results").appendChild(newImage);


  }
}

// dont forget your event listener
document.querySelector("#search-form").addEventListener('submit', giphySearch);
