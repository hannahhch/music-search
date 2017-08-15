
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
      } console.log(searchURL);


      response.json().then(function(data) {
        document.querySelector(".results-wrapper").innerHTML = "";
        for (let i = 0; i < data.results.length; i ++) {
          let track = data.results[i].trackName;
          let album = data.results[i].collectionName;
          let musicBoxes = document.createElement('div');
          musicBoxes.setAttribute("class", "box");
          let markup = `<p>${track}</p>
          <p>${album}</p>`

          musicBoxes.innerHTML = markup
          let box = document.querySelector(".results-wrapper");
          box.appendChild(musicBoxes);
        }
      })

    }
  )

})
