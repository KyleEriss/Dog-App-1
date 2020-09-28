function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}
  
  function displayResults(responseJson) {
    console.log(responseJson);
    let imageText = `<li><img src="${responseJson.message}" class="results-img"></li>`;
    $('.results-img').append(imageText)
    $('.results').removeClass('hidden');
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      $('.results-img').empty();
      let numbersError = `Please select a number between 1 and 50`;
      let imageNumber = document.getElementById("selectNumber").value;
      if (imageNumber < 1 || imageNumber > 50) {
        return $(".results-img").html(numbersError);
      }
      for (let i = 0; i < imageNumber; i++) {
          getDogImage();
      }
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });