import './style.css';
import './dom';
import player from './player';
import computer from './computer';

const game = (() => {
  const pBoard = player().getBoard();
  const c = computer();
  const cBoard = c.getBoard();
})();
