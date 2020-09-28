function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      //.catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function displayResults(responseJson) {
    console.log(responseJson);
    let imageText = `<li><img src="${responseJson.message}" class="results-img"></li>`;
    //replace the existing image with the new one
    console.log(imageText);
    $('.results-img').append(imageText)
    //display the results section
    $('.results').removeClass('hidden');
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      $('.results-img').empty();
      let imageNumber = document.getElementById("selectNumber").value;
      console.log(imageNumber);
      for (let i = 0; i < imageNumber; i++) {
          getDogImage();
      }
      
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });