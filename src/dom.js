import game from '.';
import x from './assets/close.svg';
import dot from './assets/circle-medium.svg';

const drag = (() => {
  const dragData = {};
  document.addEventListener('dragstart', (e) => {
    dragData.target = e.target;
    dragData.length = e.target.dataset.length;
    dragData.i = e.target.dataset.i;
    e.target.classList.add('dragging');
  });
  document.addEventListener('dragend', (event) => {
    // reset the transparency
    event.target.classList.remove('dragging');
  });
  document.addEventListener('dragover', (event) => {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  document.addEventListener('dragenter', (event) => {
    if (event.target.classList.contains('dropzone')) {
      const { coord } = event.target.dataset;
      const [a, b] = coord.split(',');
      const pBoard = game.getPBoard();
      const check = pBoard.checkDrop([a, b], dragData.length);
      const coords = pBoard.getCoords([a, b], dragData.length);
      coords.forEach((e) => {
        const box = document.querySelector(`#left div[data-coord='${e}']`);
        if (check) {
          box.classList.add('valid-drop');
        } else {
          box.classList.add('invalid-drop');
        }
      });
    }
  });
  document.addEventListener('dragleave', (event) => {
    if (event.target.classList.contains('dropzone')) {
      removeDragClasses(event);
    }
  });
  document.addEventListener('drop', (event) => {
    event.preventDefault();
    const pBoard = game.getPBoard();
    if (event.target.classList.contains('dropzone')) {
      removeDragClasses(event);
      const { coord } = event.target.dataset;
      const [a, b] = coord.split(',');
      const check = pBoard.checkDrop([a, b], dragData.length);
      const coords = pBoard.getCoords([a, b], dragData.length);
      if (check) {
        pBoard.removeShip(dragData.i);
        pBoard.addShip(coords, dragData.i);
        if (dragData.target.parentElement.id === 'ship-box') {
          const shipBox = document.getElementById('ship-box');
          shipBox.removeChild(dragData.target);
        }
      }
    }
    const grid = pBoard.getGrid();
    displayState.displayShipsPlayer(grid);
  });
  function removeDragClasses(event) {
    const { coord } = event.target.dataset;
    const [a, b] = coord.split(',');
    const pBoard = game.getPBoard();
    const coords = pBoard.getCoords([a, b], dragData.length);
    coords.forEach((e) => {
      const box = document.querySelector(`#left div[data-coord='${e}']`);
      box.classList.remove('valid-drop');
      box.classList.remove('invalid-drop');
    });
  }
})();

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
        } else {
          div.classList.add('dropzone');
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
    const cGrid = document.querySelector('#right .grid');
    const divs = cGrid.querySelectorAll('.grid-div');
    divs.forEach((e) => {
      e.removeEventListener('click', attack);
    });
  }
  function removeOneListener(box) {
    box.removeEventListener('click', attack);
  }
  function resetPlayerGrid() {
    clearPlayerGrid();
    createGridBoxes(pGrid, false);
  }
  function clearPlayerGrid() {
    const grid = document.querySelector('#left .grid');
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }
  return { removeListeners, removeOneListener, resetPlayerGrid };
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
    displayShipsPlayer(pGrid);
    displayShipsComputer(cGrid);
    displayHitsBoth(pGrid, cGrid);
  }
  function displayShipsPlayer(pGrid) {
    grid.resetPlayerGrid();

    const gridDisplay = document.querySelector('#left .grid');
    Object.entries(pGrid).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('isSunk')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            box.classList.add('ship');
            box.dataset.length = val2.length;
            box.dataset.i = val2.i;
            box.draggable = true;
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
            box.draggable = true;
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
  function displayShipBox(ships) {
    const shipBox = document.getElementById('ship-box');
    ships.forEach((e, i) => {
      const div = document.createElement('div');
      div.classList = 'ship-div';
      div.dataset.length = e.length;
      div.dataset.i = i;
      div.draggable = true;
      for (let i = 0; i < e.length; i++) {
        const sDiv = document.createElement('div');
        sDiv.classList = 'ship';
        div.appendChild(sDiv);
      }
      shipBox.appendChild(div);
    });
  }
  return { display, displayShipBox, displayShipsPlayer };
})();

function endGame(winner) {
  grid.removeListeners();
  alert(`${winner} wins!`);
}

export { displayState, endGame };
