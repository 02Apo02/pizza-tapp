import React, { useState } from "react";
export default function Home(){
  const [coins, setCoins] = useState(()=>Number(localStorage.getItem("pt_coins")||0));
  const tap = () => {
    const v = coins + 1;
    setCoins(v); localStorage.setItem("pt_coins", String(v));
  };
  return (
    <div className="screen center" style={{flexDirection:"column", gap:14}}>
      <div className="title">🍕 Pizza Tapp</div>
      <div className="big">{coins}</div>
      <button onClick={tap}>Tap!</button>
    </div>
  );
}