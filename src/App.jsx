import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Wallet from "./Wallet.jsx";
import Store from "./Store.jsx";
import Achievements from "./Achievements.jsx";
import Airdrop from "./Airdrop.jsx";
import Tasks from "./Tasks.jsx";
import Earnings from "./Earnings.jsx";
import Home from "./Home.jsx";

export default function App() {
  const [screen, setScreen] = useState("home");

  const TopBar = () => (
    <div className="header">
      <button onClick={() => setScreen("wallet")}>💰 Cüzdan</button>
      <button onClick={() => setScreen("store")}>🏪 Mağaza</button>
      <button onClick={() => setScreen("achievements")}>🏆 Başarımlar</button>
    </div>
  );

  let view = null;
  switch (screen) {
    case "wallet":
      view = <Wallet />;
      break;
    case "store":
      view = <Store />;
      break;
    case "achievements":
      view = <Achievements />;
      break;
    case "airdrop":
      view = <Airdrop />;
      break;
    case "tasks":
      view = <Tasks />;
      break;
    case "earn":
      view = <Earnings />;
      break;
    default:
      view = <Home />;
  }

  return (
    <div className="app">
      <TopBar />
      <div className="screen">{view}</div>
      <Navbar setScreen={setScreen} active={screen} />
    </div>
  );
} 
