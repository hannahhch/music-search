
//get the submit button
let button = document.querySelector('form');

//get the iTunes search 'api' and assign key values
let searchTunes = 'https://itunes.apple.com/search?term=';

//when the button is clicked
button.addEventListener('submit', function(event) {
  event.preventDefault();
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


      //store variable information to put on the page
      response.json().then(function(data) {
        document.querySelector(".results-wrapper").innerHTML = "";
        for (let i = 0; i < data.results.length; i ++) {
          let track = data.results[i].trackName;
          let album = data.results[i].collectionName;
          let art = data.results[i].artworkUrl100;
          let artist = data.results[i].artistName;
          let sample = data.results[i].previewUrl;
          //create a div for each
          let musicBoxes = document.createElement('div');
          musicBoxes.setAttribute("class", "box");

          //define the html for the page
          let markup =
          `
          <p><img src = ${art} class = "albumPics"></p>
          <p class = 'artistTrack'>${track}</p>
          <p class = "artistTitle">${artist}</p>
          `

          //put the markup as html on the page
          musicBoxes.innerHTML = markup
          let box = document.querySelector(".results-wrapper");
          box.appendChild(musicBoxes);
          //define a variable for the click effect on album pictures
          let clickPic = musicBoxes.querySelector(".albumPics");
          //add the click event listener to album pictures
          clickPic.addEventListener('click', function(event){
            //get the audio player
            let getMusic = document.getElementById('audio-player');
            //store the music url as html on the page
            getMusic.innerHTML = `<audio controls autoplay><source src = "${sample}" type = "audio/wav"></audio>`
          })


        }

      })

    }
  )

})
