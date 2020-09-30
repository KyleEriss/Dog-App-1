'use strict'

function getDogPics() {
  let numOfDogs = $('#selectNumber').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(error => alert("Something went wrong, please try again"));
}

function consoleResponse() {
  let numOfDogs = $('#selectNumber').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson.message))
    .catch(error => alert("Something went wrong, please try again"));
}

function displayDogs(responseJson) {
  for (let i = 0; i < responseJson.message.length; i++) {
    $(".results").append(`<img src="${responseJson.message[i]}" class="results-img">`)
  }
    $(".results").removeClass("hidden");
}

function clearImages() {
  $(".results-img").remove();
}


function handleForm() {
  $('form').submit(event => {
    event.preventDefault();
    clearImages();
    let numOfDogs = $('#selectNumber').val();
    let errorMessage = `Please select a number between 1 and 50`;
    console.log(numOfDogs);
    if (numOfDogs < 1 || numOfDogs > 50) {
      return alert(errorMessage);
    }
    getDogPics();
    consoleResponse();
  });
}

function dogImageApp() {
  console.log("App is loaded, awaiting submission!");
  handleForm();
}

$(dogImageApp);