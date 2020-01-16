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


//====== Consuming Promises ======//
// Then Catch Syntax

// Async Await Syntax



//====== Making HTTP Requests ======//


  



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