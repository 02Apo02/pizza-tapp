import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import PizzaTapGame from "./screens/PizzaTapGame";
import Wallet from "./screens/Wallet";
import Tasks from "./screens/Tasks";
import HourlyEarnings from "./screens/HourlyEarnings";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeScreen, setActiveScreen] = useState("game");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2sn yükleniyor ekranı
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  const renderScreen = () => {
    switch (activeScreen) {
      case "wallet":
        return <Wallet />;
      case "tasks":
        return <Tasks />;
      case "earnings":
        return <HourlyEarnings />;
      default:
        return <PizzaTapGame />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
      <Navbar setActiveScreen={setActiveScreen} />
    </div>
  );
}