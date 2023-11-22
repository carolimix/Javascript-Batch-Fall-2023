async function getRandomDogImage() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();
  let divDog = document.getElementById('randomDog');
    let randomDogImg = 
}
