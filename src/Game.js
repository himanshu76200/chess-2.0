import * as Chess from "chess.js";
import { BehaviorSubject } from "rxjs";

const chess = new Chess();

export const gameSubject = new BehaviorSubject({
  board: chess.board(),
});

export const resetGame = () => {
  chess.reset();
  updateGame();
};

export const move = (from, to) => {
  let tempMove = { from, to };
  const legalMove = chess.move(tempMove);

  if (legalMove) {
    updateGame();
  }
};

const updateGame = () => {
  const isGameOver = chess.game_over();

  const newGame = {
    board: chess.board(),
    isGameOver,
    result: isGameOver ? getGameResult() : null,
  };

  gameSubject.next(newGame);
};

const getGameResult = () => {
  if (chess.in_checkmate()) {
    const winner = chess.turn() === "w" ? "Black" : "White";
    return `CHECKMATE - WINNER - ${winner}`;
  } else if (chess.in_draw()) {
    let reason = `50 - MOVES - RULE`;
    if (chess.in_stalemate()) {
      reason = "STALEMATE";
    } else if (chess.in_threefold_repetation()) {
      reason = "REPETITION";
    } else if (chess.insufficient_material()) {
      reason = "insufficient material";
    }
    return `DRAW - ${reason}`;
  } else {
    return `UNKNOWN REASON`;
  }
};
