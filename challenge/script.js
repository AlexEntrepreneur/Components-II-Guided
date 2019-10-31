function createCard(title, imgsrc) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h2');
  // const sub = document.createElement('p');
  // const description = document.createElement('p');

  card.append(image);
  card.append(name);
  // card.append(sub);
  // card.append(description);

  card.classList.add('card');
  // sub.classList.add('subtitle');
  // description.classList.add('desc');

  name.textContent = title;
  image.src = imgsrc;
  // sub.textContent = subtitle;
  // description.textContent = content;

  return card;
}

const container = document.querySelector('.container');

// cardData.forEach((card => {
//   container.append(createCard(card.title, card.imgsrc));
// }));

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