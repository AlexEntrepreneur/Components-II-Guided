//====== Creating Promises ======//
// Creating a simple promise
const newPromise = new Promise((resolve, reject) => {
  const shouldResolve = true;

  setTimeout(() => {
    if (shouldResolve) {
      resolve('Promise Resolved!');
    } else {
      reject('Error! Promise Rejected');
    }
  }, 2000);
});

// console.log(newPromise);


//====== Consuming Promises ======//
// Then Catch Syntax
// newPromise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     // We usually catch our errors here
//     console.log(error);
//   });

// Async Await Syntax
async function getData() {
  // With our await we have to save the result in a variable
  try {
    // await is our happy path (positive scenario)
    const response = await newPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getData();

// Our synchronous code runs before the promise resolves!
console.log('This is some synchronous defined code after my promise');

//====== Making HTTP Requests ======//
axios.get('http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=6c3220540cfd11e43807a5cde257fc1b')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

  
  //====== Using AJAX with Components ======//

function createPanel(title, img) {
  const panel = document.createElement('div');
  const panelBar = document.createElement('div');
  const panelTitle = document.createElement('h3');
  const panelButtons = document.createElement('div');
  const buttonOpen = document.createElement('button');
  const buttonClose = document.createElement('button');
  const panelImg = document.createElement('img');
  
  panel.append(panelBar);
  panel.append(panelImg);
  panelBar.append(panelTitle);
  panelBar.append(panelButtons);
  panelButtons.append(buttonOpen);
  panelButtons.append(buttonClose);

  panel.classList.add('panel');
  panelBar.classList.add('panel-bar');
  panelButtons.classList.add('panel-buttons');
  buttonOpen.classList.add('panel-btn-open');
  buttonClose.classList.add('panel-btn-close', 'hide-btn');
  panelImg.classList.add('panel-img');

  buttonOpen.textContent = '\u25BC';
  buttonClose.textContent = '\u25B2';
  panelTitle.textContent = title;
  panelImg.src = img;

  panelButtons.addEventListener('click', event => {
    console.log('Panel button detected click!', event.target);
    buttonOpen.classList.toggle('hide-btn');
    buttonClose.classList.toggle('hide-btn');

    panelImg.classList.toggle('toggle-on');
  });

  return panel;
}

const accordion = document.querySelector('.accordion');

axios.get('https://dog.ceo/api/breeds/image/random/12')
  .then(response => {
    response.data.message.forEach((img, index) => {
      const newPanel = createPanel(`Doggo ${index + 1}!`, img);
      accordion.append(newPanel);
    });
  })
  .catch(error => {
    console.log(error);
  });