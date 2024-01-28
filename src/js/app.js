import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

const loadGame = readGameSaving;
const saveGame = writeGameSaving;

const game = new Game();
game.start();
