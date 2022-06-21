import './style.css';
import { displayShips } from './dom';
import player from './player';
import computer from './computer';

const game = (() => {
  const pBoard = player().getBoard();
  const c = computer();
  const cBoard = c.getBoard();
  const pGrid = pBoard.getGrid();
  displayShips.display(pGrid);
})();
