"use client";
import { useState, useEffect, useCallback } from "react";

export function FlappyBirdSection() {
  const [birdY, setBirdY] = useState(250);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const GRAVITY = 0.6;
  const JUMP_STRENGTH = -9;
  const PIPE_WIDTH = 60;
  const PIPE_GAP = 150;
  const GAME_HEIGHT = 500;
  const GAME_WIDTH = 400;

  // Bird physics
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      setBirdVelocity((prev) => prev + GRAVITY);
      setBirdY((prev) => {
        const newY = prev + birdVelocity;

        // Check ground/ceiling collision
        if (newY <= 0 || newY >= GAME_HEIGHT - 30) {
          setGameOver(true);
          return prev;
        }

        return newY;
      });

      // Move pipes
      setPipes((prev) => {
        const newPipes = prev
          .map((pipe) => ({
            ...pipe,
            x: pipe.x - 3,
          }))
          .filter((pipe) => pipe.x > -PIPE_WIDTH);

        // Add new pipe
        if (
          newPipes.length === 0 ||
          newPipes[newPipes.length - 1].x < GAME_WIDTH - 200
        ) {
          const pipeHeight =
            Math.random() * (GAME_HEIGHT - PIPE_GAP - 100) + 50;
          newPipes.push({
            x: GAME_WIDTH,
            topHeight: pipeHeight,
            bottomY: pipeHeight + PIPE_GAP,
            passed: false,
          });
        }

        return newPipes;
      });
    }, 20);

    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver, birdVelocity]);

  // Collision detection
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    pipes.forEach((pipe) => {
      // Check if bird passed pipe for scoring
      if (!pipe.passed && pipe.x + PIPE_WIDTH < 50) {
        pipe.passed = true;
        setScore((prev) => prev + 1);
      }

      // Check collision
      if (
        50 < pipe.x + PIPE_WIDTH &&
        50 + 30 > pipe.x &&
        (birdY < pipe.topHeight || birdY + 30 > pipe.bottomY)
      ) {
        setGameOver(true);
      }
    });
  }, [birdY, pipes, gameStarted, gameOver]);

  const jump = useCallback(() => {
    if (gameOver) return;
    if (!gameStarted) {
      setGameStarted(true);
    }
    setBirdVelocity(JUMP_STRENGTH);
  }, [gameStarted, gameOver]);

  // Handle spacebar
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [jump]);

  const resetGame = () => {
    setBirdY(250);
    setBirdVelocity(0);
    setPipes([]);
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Score */}
      <div className="text-2xl font-bold text-blue-400">Score: {score}</div>

      {/* Game Container */}
      <div
        className="relative bg-sky-200 rounded-lg overflow-hidden"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
      >
        {/* Bird */}
        <div
          className="absolute w-8 h-8 bg-yellow-400 rounded-full border-2 border-orange-400 transition-transform duration-75"
          style={{
            left: "50px",
            top: `${birdY}px`,
            transform: `rotate(${Math.min(birdVelocity * 3, 45)}deg)`,
          }}
        >
          <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
        </div>

        {/* Pipes */}
        {pipes.map((pipe, index) => (
          <div key={index}>
            {/* Top pipe */}
            <div
              className="absolute bg-green-500 border-2 border-green-600"
              style={{
                left: `${pipe.x}px`,
                top: 0,
                width: `${PIPE_WIDTH}px`,
                height: `${pipe.topHeight}px`,
              }}
            />
            {/* Bottom pipe */}
            <div
              className="absolute bg-green-500 border-2 border-green-600"
              style={{
                left: `${pipe.x}px`,
                top: `${pipe.bottomY}px`,
                width: `${PIPE_WIDTH}px`,
                height: `${GAME_HEIGHT - pipe.bottomY}px`,
              }}
            />
          </div>
        ))}

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">Game Over!</h3>
              <p className="text-xl text-gray-300 mb-4">Score: {score}</p>
              <button
                onClick={resetGame}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        {/* Start Screen */}
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-lg mb-4">
                Click or press Space to start!
              </p>
              <p className="text-gray-300">Keep clicking to stay airborne</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="text-center">
        <button
          onClick={jump}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg mb-2"
        >
          Jump / Start
        </button>
        <p className="text-gray-400 text-sm">Or press Spacebar</p>
      </div>
    </div>
  );
}
