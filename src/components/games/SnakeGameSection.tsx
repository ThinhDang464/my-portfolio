"use client";
import { useState, useEffect, useCallback } from "react";

export function SnakeGameSection() {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const BOARD_SIZE = 20;

  // Game logic
  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted) return;

    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = [...newSnake[0]];

      head[0] += direction[0];
      head[1] += direction[1];

      // Check wall collision
      if (
        head[0] < 0 ||
        head[0] >= BOARD_SIZE ||
        head[1] < 0 ||
        head[1] >= BOARD_SIZE
      ) {
        setGameOver(true);
        return prevSnake;
      }

      // Check self collision
      if (
        newSnake.some(
          (segment) => segment[0] === head[0] && segment[1] === head[1]
        )
      ) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head[0] === food[0] && head[1] === food[1]) {
        setScore((prev) => prev + 10);
        setFood([
          Math.floor(Math.random() * BOARD_SIZE),
          Math.floor(Math.random() * BOARD_SIZE),
        ]);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted]);

  // Handle keyboard input
  const handleKeyPress = useCallback(
    (e) => {
      //prevent browser behave to move windows
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
      if (!gameStarted) return;

      switch (e.key) {
        case "ArrowUp":
          if (direction[0] !== 1) setDirection([-1, 0]);
          break;
        case "ArrowDown":
          if (direction[0] !== -1) setDirection([1, 0]);
          break;
        case "ArrowLeft":
          if (direction[1] !== 1) setDirection([0, -1]);
          break;
        case "ArrowRight":
          if (direction[1] !== -1) setDirection([0, 1]);
          break;
      }
    },
    [direction, gameStarted]
  );

  // Game loop
  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  // Event listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const startGame = () => {
    setSnake([[10, 10]]);
    setFood([15, 15]);
    setDirection([0, 1]);
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setSnake([[10, 10]]);
    setFood([15, 15]);
    setDirection([0, 1]);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-12 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-400">Use arrow keys to control the snake</p>
        </div>

        {/* Game Board */}
        <div className="flex flex-col items-center gap-6">
          {/* Score */}
          <div className="text-2xl font-bold text-blue-400">Score: {score}</div>

          {/* Game Container */}
          <div className="relative bg-gray-900 border-2 border-gray-700 rounded-lg p-4">
            <div
              className="grid gap-0 bg-gray-800 rounded"
              style={{
                gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
                width: "400px",
                height: "400px",
              }}
            >
              {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map(
                (_, index) => {
                  const row = Math.floor(index / BOARD_SIZE);
                  const col = index % BOARD_SIZE;

                  const isSnake = snake.some(
                    (segment) => segment[0] === row && segment[1] === col
                  );
                  const isFood = food[0] === row && food[1] === col;
                  const isHead =
                    snake[0] && snake[0][0] === row && snake[0][1] === col;

                  return (
                    <div
                      key={index}
                      className={`w-5 h-5 ${
                        isSnake
                          ? isHead
                            ? "bg-green-400"
                            : "bg-green-500"
                          : isFood
                          ? "bg-red-500 rounded-full"
                          : "bg-gray-800"
                      } transition-colors duration-100`}
                    />
                  );
                }
              )}
            </div>

            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Game Over!
                  </h3>
                  <p className="text-xl text-gray-300 mb-4">
                    Final Score: {score}
                  </p>
                  <button
                    onClick={startGame}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex gap-4">
            {!gameStarted ? (
              <button
                onClick={startGame}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg"
              >
                Start Game
              </button>
            ) : (
              <button
                onClick={resetGame}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Reset Game
              </button>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="grid grid-cols-3 gap-2 lg:hidden">
            <div></div>
            <button
              onClick={() => handleKeyPress({ key: "ArrowUp" })}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg"
            >
              ↑
            </button>
            <div></div>
            <button
              onClick={() => handleKeyPress({ key: "ArrowLeft" })}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg"
            >
              ←
            </button>
            <button
              onClick={() => handleKeyPress({ key: "ArrowDown" })}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg"
            >
              ↓
            </button>
            <button
              onClick={() => handleKeyPress({ key: "ArrowRight" })}
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
