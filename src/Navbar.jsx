import React from "react";

export default function Navbar({ setScreen, active }) {
  const Btn = ({ id, children }) => (
    <button
      onClick={() => setScreen(id)}
      style={{
        border: "2px solid",
        borderColor: active === id ? "#ffd54a" : "rgba(255,255,255,.12)",
        background: "#222",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );

  return (
    <div
      className="navbar"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        background: "rgba(0,0,0,.3)",
        padding: "10px 0",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
      }}
    >
      <Btn id="home">🍕 Ana</Btn>
      <Btn id="airdrop">🎁 Airdrop</Btn>
      <Btn id="tasks">📋 Görevler</Btn>
      <Btn id="earn">⏳ Kazanç</Btn>
    </div>
  );
}