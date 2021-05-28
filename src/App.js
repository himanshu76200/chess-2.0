import React, { useEffect, useState } from "react";
import "./App.css";
import { gameSubject, resetGame } from "./Game";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
    });
    return () => subscribe.unsubscribe();
  }, []);
  return (
    <div className="container">
      {isGameOver && (
        <h2 className="game-over">
          GAME OVER
          <button onClick={resetGame}>
            <span>NEW GAME</span>
          </button>
        </h2>
      )}

      <div className="board-container">
        <Board board={board} />
      </div>
      {result && (
        <>
          <p className="game-over">{result}</p>
        </>
      )}
    </div>
  );
}

export default App;
