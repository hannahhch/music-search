//target the search box input value. append that to the itunes api

//fetch itunes API
let button = document.querySelector('.search-button');

let searchTunes = 'https://itunes.apple.com/search?term=key1=value1&key2=value2&key3-value3';

button.addEventLIstener('click', function() {
  var searchBox = document.querySelector('.search-music').value;
  let searchURL = searchTunes + seachBox;


fetch(searchURL)

})
