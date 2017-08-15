
//get the submit button
let button = document.querySelector('.search-button');

//get the iTunes search 'api' and assign key values
let searchTunes = 'https://itunes.apple.com/search?term=';

//when the button is clicked
button.addEventListener('click', function() {
  //get the value from the search music input box
  var searchBox = document.querySelector('.search-music').value;
  //declare a variable that concatenates the API and search term
  let searchURL = searchTunes + searchBox;

//fetch the concatenation
fetch(searchURL)

  .then(
    //if no response, return the error
    function(response) {
      if (response.status !== 200) {
        console.log('Error: ' + response.status);
        return;
        //if response is 200, it worked!
      } console.log('it worked');


      response.json().then(function(data) {
        document.querySelector
      })

    }
  )

})
