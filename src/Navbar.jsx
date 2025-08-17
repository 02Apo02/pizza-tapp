import React from "react";

export default function Navbar({ setScreen, active }) {
  const Btn = ({ id, children }) => (
    <button
      onClick={() => setScreen(id)}
      style={{ borderColor: active === id ? "#ffd54a" : "rgba(255,255,255,.12)" }}
    >
      {children}
    </button>
  );

  return (
    <div className="navbar">
      <Btn id="home">🍕 Ana</Btn>
      <Btn id="airdrop">🎁 Airdrop</Btn>
      <Btn id="tasks">📋 Görevler</Btn>
      <Btn id="earn">⏳ Kazanç</Btn>
    </div>
  );
}