import game from '.';
import x from './assets/close.svg';
import dot from './assets/circle-medium.svg';

const btns = (() => {
  const placeBtn = document.getElementById('place');
  placeBtn.onclick = showShipBox;
  const randomBtn = document.getElementById('random');
  randomBtn.onclick = randomPShips;
  const start = document.getElementById('start');
  start.onclick = startGame;
  function startGame() {
    const pBoard = game.getPBoard();
    const check = pBoard.checkGrid();
    if (!check) {
      alert('All Ships have not been placed');
      return;
    }
    grid.addCGridListeners();
    removeBtns();
    closeShipBox();
    grid.resetPlayerGrid();
    displayState.displayShipsPlayer(pBoard, false);
    displayState.displayText();
  }
  function showShipBox() {
    const pBoard = game.getPBoard();
    pBoard.resetGrid();
    displayState.resetShipBox();
    displayState.displayShipsPlayer(pBoard);
    const shipBox = document.getElementById('hide-div');
    shipBox.classList.toggle('hide');
    const shipText = document.querySelector('#left .text');
    shipText.classList.toggle('hide');
  }
  function randomPShips() {
    closeShipBox();
    const pBoard = game.getPBoard();
    pBoard.resetGrid();
    pBoard.randomPopulate();
    displayState.displayShipsPlayer(pBoard, false);
    displayState.hideShipText();
  }
  function closeShipBox() {
    const shipBox = document.getElementById('hide-div');
    shipBox.classList.add('hide');
    displayState.hideShipText();
  }
  function removeBtns() {
    placeBtn.classList.add('hide');
    randomBtn.classList.add('hide');
    start.classList.add('hide');
  }
})();
const drag = (() => {
  const dragData = {};
  document.addEventListener('dragstart', (e) => {
    dragData.target = e.target;
    dragData.length = e.target.dataset.length;
    dragData.i = e.target.dataset.i;
    dragData.hor = e.target.dataset.hor;
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
      let check; let
        coords;
      if (dragData.hor === 'true') {
        check = pBoard.checkDropHor([a, b], dragData.length, dragData.i);
        coords = pBoard.getCoordsHor([a, b], dragData.length);
      } else {
        check = pBoard.checkDropVer([a, b], dragData.length, dragData.i);
        coords = pBoard.getCoordsVer([a, b], dragData.length);
      }
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
      let coords; let
        check;
      if (dragData.hor === 'true') {
        check = pBoard.checkDropHor([a, b], dragData.length, dragData.i);
        coords = pBoard.getCoordsHor([a, b], dragData.length);
      } else {
        check = pBoard.checkDropVer([a, b], dragData.length, dragData.i);
        coords = pBoard.getCoordsVer([a, b], dragData.length);
      }
      if (check) {
        pBoard.removeShip(dragData.i);
        pBoard.addShip(coords, dragData.i, dragData.hor);
        if (dragData.target.parentElement.id === 'ship-box') {
          const shipBox = document.getElementById('ship-box');
          shipBox.removeChild(dragData.target);
        }
      }
    }
    displayState.displayShipsPlayer(pBoard);
  });
  function removeDragClasses(event) {
    const { coord } = event.target.dataset;
    const [a, b] = coord.split(',');
    const pBoard = game.getPBoard();
    let coords;
    if (dragData.hor === 'true') {
      coords = pBoard.getCoordsHor([a, b], dragData.length);
    } else {
      coords = pBoard.getCoordsVer([a, b], dragData.length);
    }
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
        if (!comp) {
          div.classList.add('dropzone');
        }
        const img = document.createElement('img');
        div.appendChild(img);
        grid.appendChild(div);
      });
    }
  }
  function addCGridListeners() {
    const grid = document.querySelector('#right .grid');
    const gridDivs = grid.querySelectorAll('.grid-div');
    gridDivs.forEach((e) => {
      e.addEventListener('click', attack, { once: true });
    });
  }
  function attack(e) {
    displayState.hideText();
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
  return {
    removeListeners, removeOneListener, resetPlayerGrid, addCGridListeners,
  };
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
  function display(pBoard) {
    displayShipsPlayer(pBoard);
  }
  function displayShipsPlayer(pBoard, interact = true) {
    grid.resetPlayerGrid();
    const pGrid = pBoard.getGrid();
    const gridDisplay = document.querySelector('#left .grid');
    Object.entries(pGrid).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('isSunk')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            box.classList.add('ship');
            if (interact) {
              box.dataset.length = val2.length;
              box.dataset.i = val2.i;
              box.dataset.head = val2.head;
              box.draggable = true;
              box.dataset.hor = val2.hor;
              box.onclick = changeOri;
            }
          }
        }
      });
    });
  }
  function changeOri(e) {
    const pBoard = game.getPBoard();
    const { hor } = e.target.dataset;
    const { head } = e.target.dataset;
    const [a, b] = head.split(',');
    const { length } = e.target.dataset;
    const { i } = e.target.dataset;
    let check;
    if (hor === 'true') {
      check = pBoard.checkDropVer([a, b], length, i);
    } else {
      check = pBoard.checkDropHor([a, b], length, i);
    }
    if (check) {
      if (hor === 'true') {
        pBoard.changeOriVert(e);
      } else {
        pBoard.changeOriHor(e);
      }
      displayShipsPlayer(pBoard);
    }
    if (!check) {
      let coords;
      if (hor === 'true') {
        coords = pBoard.getCoordsVer([a, b], length);
      } else {
        coords = pBoard.getCoordsHor([a, b], length);
      }
      coords.forEach((x) => {
        const box = document.querySelector(`#left div[data-coord='${x}']`);
        box.classList.add('red');
        setTimeout(() => {
          box.classList.remove('red');
        }, '100');
      });
    }
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
  function displayShipBox(ships) {
    const shipBox = document.getElementById('ship-box');
    ships.forEach((e, i) => {
      const div = document.createElement('div');
      div.classList = 'ship-div';
      div.dataset.length = e.length;
      div.dataset.i = i;
      div.draggable = true;
      div.dataset.hor = true;
      for (let i = 0; i < e.length; i++) {
        const sDiv = document.createElement('div');
        sDiv.classList = 'ship';
        div.appendChild(sDiv);
      }
      shipBox.appendChild(div);
    });
  }
  function deleteShips() {
    const shipBox = document.getElementById('ship-box');
    while (shipBox.firstChild) {
      shipBox.removeChild(shipBox.firstChild);
    }
  }
  function resetShipBox() {
    const pBoard = game.getPBoard();
    const ships = pBoard.getShips();
    deleteShips();
    displayShipBox(ships);
  }
  function displayText() {
    const text = document.querySelector('#right .text');
    text.classList.remove('hide');
  }
  function hideText() {
    const text = document.querySelector('#right .text');
    text.classList.add('hide');
  }

  function hideShipText() {
    const text = document.querySelector('#left .text');
    text.classList.add('hide');
  }

  return {
    display,
    displayHitsBoth,
    displayShipBox,
    displayShipsPlayer,
    resetShipBox,
    displayText,
    hideText,
    hideShipText,
  };
})();

function endGame(winner) {
  grid.removeListeners();
  alert(`${winner} wins!`);
}

export { displayState, endGame };
