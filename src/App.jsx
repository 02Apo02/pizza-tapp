import React, { useState, useEffect } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [pizzaPos, setPizzaPos] = useState({ top: 50, left: 50 });
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  function handlePizzaClick() {
    if (gameOver) return;
    setScore(score + 1);
    setPizzaPos({
      top: Math.floor(Math.random() * 80) + 10 + "%",
      left: Math.floor(Math.random() * 80) + 10 + "%",
    });
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: 50 }}>
      <h1>Pizza Tapp Game</h1>
      <p>Time Left: {timeLeft} seconds</p>
      <p>Score: {score}</p>

      {gameOver ? (
        <h2>Game Over! Your final score is {score}</h2>
      ) : (
        <div
          onClick={handlePizzaClick}
          style={{
            position: "relative",
            width: 300,
            height: 300,
            margin: "20px auto",
            border: "2px solid #333",
            borderRadius: 10,
            backgroundColor: "#f8e5d8",
            cursor: "pointer",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Pizza-300px.png"
            alt="pizza"
            style={{
              width: 60,
              height: 60,
              position: "absolute",
              top: pizzaPos.top,
              left: pizzaPos.left,
              userSelect: "none",
              transition: "top 0.3s, left 0.3s",
            }}
          />
        </div>
      )}
      <p>Click the pizza as many times as you can before time runs out!</p>
    </div>
  );
}
