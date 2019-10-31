const cardData = [
  {
    title: "Octavius Kraken",
    subtitle: "Escape Artist",
    content: "Super Powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools",
    imgsrc: "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Leonardo ",
    subtitle: "Surfer / Pizza lover",
    content: "Super Powers: Decelerated Aging, Dermal Armor/Shell Formation, Enhanced Durability, Enhanced Endurance, Retractable Head, Night Vision, Speed Swimming.",
    imgsrc: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Captain Nemo",
    subtitle: "Comedian",
    content: "Super Powers: Live in a sea anenome away from predators. Has a slimy mucus covering his body that protects him from the sea anemone. Tells good dad jokes.",
    imgsrc: "https://images.unsplash.com/photo-1536168032936-9ce3b4b3165c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
];

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