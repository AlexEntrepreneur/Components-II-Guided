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

axios.get('https://dog.ceo/api/breeds/image/random/12')
  .then(response => {
    response.data.message.forEach((img, index) => {
      const newPanel = createCard(`Doggo ${index + 1}!`, img);
      container.append(newPanel);
    });
  })
  .catch(error => {
    console.log(error);
  });