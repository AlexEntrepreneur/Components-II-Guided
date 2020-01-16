//====== Creating Promises ======//
// Creating a simple promise
const newPromise = new Promise((resolve, reject) => {
  const shouldResolve = true;

  setTimeout(() => {
    if (shouldResolve) {
      resolve('Promise Resolved!');
    } else {
      reject('Error! Promise Rejected.');
    }
  }, 2000);
});

console.log(newPromise);

// Rufai
const euFlex = new Promise((resolve, reject) => {
  setTimeout(() => {
    const array = ['Alex', 'Dimos', 'Kobby', 'Kolade'];
    if (array.length === 4) {
      resolve('this is true');
    } else {
      reject('it is false');
    }
  }, 2000)
});

console.log(euFlex);

// Amin
const sprint = ms => {
  return new Promise((resolve, reject) => {
    const recordTime = ms / 1000;
    if (ms > 999) {
      resolve(`This sprinter ran in ${recordTime}s`);
    } else {
      reject(new Error(`Too slow!`));
    }
  });
};
// console.log(sprint(1000));

// Amin
const newPlayerSigning = new Promise((resolve, reject) => {
  const shouldResolve = true;
  setTimeout(() => {
    if (shouldResolve) {
      resolve('Promise Resolved!');
    } else {
      reject('Error! Promise Rejected.');
    }
  }, 2000);
});

//====== Consuming Promises ======//
// Then Catch Syntax
newPromise.then((msg) => {
  console.log(msg + " Some extra information");
}).catch((error) => {
  console.log(error);
});

// Amin
newPlayerSigning.then((msg) => {
  console.log(msg + " Man Utd signed a new player in the January transfer window!");
}).catch((error) => {
  console.log(error);
});

// Async Await + Try Catch Syntax
// We tell JS that our function is asynchronous
// with the async keyword
async function getData() {
  try {
    // await is our happy path (success scenario)
    // Success lives inside the try block
    const result = await sprint(10000);
    console.log(result);
  } catch(error) {
    // Failure lives inside the catch block
    console.log(error);
  }
}

getData();


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
    buttonOpen.classList.toggle('hide-btn');
    buttonClose.classList.toggle('hide-btn');

    panelImg.classList.toggle('toggle-on');
  });

  return panel;
}

// 2. Select the container in which to create new components
const accordion = document.querySelector('.accordion');

// 1. Send a get request to the API
axios.get('https://dog.ceo/api/breeds/image/random/12')
  .then(res => {
    // Find the array of data in the response object
    const dogsArray = res.data.message;

    // Loop through the data and generate new panels
    dogsArray.forEach((img, index) => {
      const newPanel = createPanel(`Doggo ${index + 1}`, img);
      accordion.append(newPanel);
    });

  })
  .catch(error => {
    console.log(error);
  });