import React from "react";

export default function Navbar({ setActiveScreen }) {
  return (
    <div className="navbar">
      <button onClick={() => setActiveScreen("main")}>Ana</button>
      <button onClick={() => setActiveScreen("gorev")}>Görev</button>
      <button onClick={() => setActiveScreen("saatlik")}>Saatlik Kazanç</button>
      <button onClick={() => setActiveScreen("wallet")}>Cüzdan</button>
    </div>
  );
}