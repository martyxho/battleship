import game from '.';
import x from './assets/close.svg';
import dot from './assets/circle-medium.svg';

const grid = (() => {
  const pGrid = document.querySelector('#left .grid');
  const cGrid = document.querySelector('#right .grid');
  createGridBoxes(pGrid, false);
  createGridBoxes(cGrid, true);
  function createGridBoxes(grid, comp) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = 1; i < 11; i++) {
      alphabet.forEach((e) => {
        const div = document.createElement('div');
        div.classList = 'grid-div';
        div.dataset.coord = [i, e];
        if (comp) {
          div.addEventListener('click', attack, { once: true });
        }
        const img = document.createElement('img');
        div.appendChild(img);
        grid.appendChild(div);
      });
    }
  }
  function attack(e) {
    const coord = e.target.dataset.coord.split(',');
    game.receivePlayerAttack(coord);
  }
  function removeListeners() {
    const cGrid = document.querySelector('#left .grid');
    const divs = cGrid.querySelectorAll('.grid-div');
    divs.forEach((e) => {
      e.removeEventListener('click', attack, { once: true });
    });
  }
  function removeOneListener(box) {
    box.removeEventListener('click', attack);
  }
  return { removeListeners, removeOneListener };
})();

const createGridGuides = (() => {
  const containers = document.querySelectorAll('.container');
  containers.forEach((c) => {
    createAlphabetGuide(c);
    createNumbersGuide(c);
  });
  function createAlphabetGuide(c) {
    const letters = c.querySelector('.letters');
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    alphabet.forEach((e) => {
      const div = document.createElement('div');
      div.textContent = e;
      div.classList = 'guide-div';
      letters.appendChild(div);
    });
  }
  function createNumbersGuide(c) {
    const numbers = c.querySelector('.numbers');
    for (let i = 1; i < 11; i++) {
      const div = document.createElement('div');
      div.textContent = i;
      div.classList = 'guide-div';
      numbers.appendChild(div);
    }
  }
})();

const displayState = (() => {
  function display(pGrid, cGrid) {
    displayShips(pGrid);
    displayShipsComputer(cGrid);
    displayHitsBoth(pGrid, cGrid);
  }
  function displayShips(grid) {
    const gridDisplay = document.querySelector('#left .grid');
    Object.entries(grid).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('isSunk')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            box.classList.add('ship');
          }
        }
      });
    });
  }
  function displayShipsComputer(grid) {
    const gridDisplay = document.querySelector('#right .grid');
    Object.entries(grid).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('isSunk')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            box.classList.add('ship');
          }
        }
      });
    });
  }
  function displayHitsBoth(pGrid, cGrid) {
    const pGridDisplay = document.querySelector('#left .grid');
    const cGridDisplay = document.querySelector('#right .grid');
    displayHits(pGrid, pGridDisplay);
    displayHits(cGrid, cGridDisplay, true);
  }

  function displayHits(g, gridDisplay, comp = false) {
    Object.entries(g).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('marker')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            if (comp) {
              grid.removeOneListener(box);
            }
            const img = box.querySelector('img');
            if (val2.hasOwnProperty('ship')) {
              img.src = x;
              box.classList.add('hit');
            } else {
              img.src = dot;
              box.classList.add('miss');
            }
          }
        }
      });
    });
  }
  return { display };
})();

function endGame(winner) {
  grid.removeListeners();
  alert(`${winner} wins!`);
}

export { displayState, endGame };
