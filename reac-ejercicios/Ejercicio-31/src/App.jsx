import { useState, useEffect } from "react";
import './App.css';
import { gameSubject, initGame, resetGame } from "../src/Game";
import Board from "../src/components/Board";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  const [turn, setTurn] = useState();

  useEffect(() => {
    initGame();
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
      setTurn(game.turn);
    });
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div className="container">
      {isGameOver && (
        <h2 className="vertical-text">
          GAME OVER
          <button className="btn btn-primary" onClick={resetGame}>
            NEW GAME
          </button>
        </h2>
      )}
      <div className="board-container">
        <Board board={board} turn={turn} />
      </div>
      {result && <p className="vertical-text">{result}</p>}
    </div>
  );
}

export default App;
