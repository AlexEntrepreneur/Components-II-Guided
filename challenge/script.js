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

// Use axios to fetch data from the dogs API
// If successful, generate new cards containing the image data received from the API
// If unsuccessful, log the error message.