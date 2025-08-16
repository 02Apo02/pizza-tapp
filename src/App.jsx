import React, { useState } from "react";
import {
  Home,
  Wallet,
  ShoppingBag,
  Award,
  Rocket,
  Clock,
  ListChecks,
} from "lucide-react";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "wallet":
        return <h2 className="text-white text-xl">💰 Cüzdan</h2>;
      case "store":
        return <h2 className="text-white text-xl">🛒 Mağaza</h2>;
      case "achievements":
        return <h2 className="text-white text-xl">🏆 Başarımlar</h2>;
      case "airdrop":
        return <h2 className="text-white text-xl">🚀 Airdrop</h2>;
      case "tasks":
        return <h2 className="text-white text-xl">📋 Görevler</h2>;
      case "earn":
        return <h2 className="text-white text-xl">⏳ Saatlik Kazanç</h2>;
      default:
        return <h2 className="text-white text-xl">🍕 Pizza Tapp Ana Ekran</h2>;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-b from-purple-900 via-black to-gray-900 relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black/40 shadow-lg">
        <button
          className="flex flex-col items-center text-white hover:text-yellow-300"
          onClick={() => setActiveScreen("wallet")}
        >
          <Wallet size={28} />
          <span className="text-sm">Cüzdan</span>
        </button>
        <button
          className="flex flex-col items-center text-white hover:text-yellow-300"
          onClick={() => setActiveScreen("store")}
        >
          <ShoppingBag size={28} />
          <span className="text-sm">Mağaza</span>
        </button>
        <button
          className="flex flex-col items-center text-white hover:text-yellow-300"
          onClick={() => setActiveScreen("achievements")}
        >
          <Award size={28} />
          <span className="text-sm">Başarımlar</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">{renderScreen()}</div>

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center p-4 bg-black/40 shadow-inner">
        <button
          className={`flex flex-col items-center ${
            activeScreen === "home" ? "text-yellow-300" : "text-white"
          }`}
          onClick={() => setActiveScreen("home")}
        >
          <Home size={28} />
          <span className="text-sm">Ana</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            activeScreen === "airdrop" ? "text-yellow-300" : "text-white"
          }`}
          onClick={() => setActiveScreen("airdrop")}
        >
          <Rocket size={28} />
          <span className="text-sm">Airdrop</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            activeScreen === "tasks" ? "text-yellow-300" : "text-white"
          }`}
          onClick={() => setActiveScreen("tasks")}
        >
          <ListChecks size={28} />
          <span className="text-sm">Görevler</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            activeScreen === "earn" ? "text-yellow-300" : "text-white"
          }`}
          onClick={() => setActiveScreen("earn")}
        >
          <Clock size={28} />
          <span className="text-sm">Kazanç</span>
        </button>
      </div>
    </div>
  );
}