import React, { useState } from "react";

export default function MainScreen() {
  const [coins, setCoins] = useState(0);

  const handleTap = () => {
    setCoins(coins + 1);
  };

  return (
    <div className="screen">
      <h1>🍕 Pizza Tapp</h1>
      <p>Coins: {coins}</p>
      <button onClick={handleTap}>Pizza’ya Tıkla!</button>
    </div>
  );
}