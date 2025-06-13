"use client";
import { useState } from "react";
import { SnakeGameSection } from "./games/SnakeGameSection";
import { FlappyBirdSection } from "./games/FlappyBirdSection";

export function GameSection() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-12 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Tired of Scrolling?
          </h2>
          <p className="text-xl text-gray-300 mb-6">Pick a Game</p>
        </div>

        {!selectedGame ? (
          /* Game Selection */
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div
              onClick={() => setSelectedGame("snake")}
              className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-green-400 rounded-lg p-6 cursor-pointer transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="text-2xl font-bold text-white mb-2">Snake</h3>
            </div>

            <div
              onClick={() => setSelectedGame("flappy")}
              className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-blue-400 rounded-lg p-6 cursor-pointer transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">🐦</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Flappy Bird
              </h3>
            </div>
          </div>
        ) : (
          /* Game Display */
          <div>
            <button
              onClick={() => setSelectedGame(null)}
              className="mb-6 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              ← Back to Games
            </button>

            {selectedGame === "snake" && <SnakeGameSection />}
            {selectedGame === "flappy" && <FlappyBirdSection />}
          </div>
        )}
      </div>
    </section>
  );
}
