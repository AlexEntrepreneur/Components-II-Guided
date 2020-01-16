function createCard(title, imgsrc) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h2');

  card.append(image);
  card.append(name);

  card.classList.add('card');

  name.textContent = title;
  image.src = imgsrc;

  return card;
}

const container = document.querySelector('.container');

// Use axios to fetch data from the dogs API
axios.get('https://dog.ceo/api/breeds/image/random/12')
  .then(response => {
    // If successful, generate new cards containing the image data received from the API
    const responseArray = response.data.message;
    responseArray.forEach((img) => {
      const dogBreed = img.split('/')[4].replace('-', ' ').toUpperCase()
      const newCard = createCard(dogBreed, img);
      container.append(newCard);
    });
  })
  .catch(error => {
    // If unsuccessful, log the error message.
    console.log(error);
  });