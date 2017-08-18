
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
          let art = data.results[i].artworkUrl100;
          let artist = data.results[i].artistName;
          let sample = data.results[i].previewUrl;
          let musicBoxes = document.createElement('div');
            musicBoxes.setAttribute("class", "box");

          let markup =
            `
            <p><img src = ${art}></p>
            <p class = 'artistTrack'>${track}</p>
            <p class = "artistTitle">${artist}</p>
            <p><audio controls = "controls">Play<source src = "${sample}" type = "audio/wav"></audio></p>
             `

          musicBoxes.innerHTML = markup
          let box = document.querySelector(".results-wrapper");
          box.appendChild(musicBoxes);
        }
      })

    }
  )

})
