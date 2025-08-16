import React, { useState } from "react";
import MainScreen from "./MainScreen";
import GorevScreen from "./GorevScreen";
import SaatlikKazancScreen from "./SaatlikKazancScreen";
import WalletScreen from "./WalletScreen";
import Navbar from "./Navbar";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("main");

  const renderScreen = () => {
    switch (activeScreen) {
      case "gorev":
        return <GorevScreen />;
      case "saatlik":
        return <SaatlikKazancScreen />;
      case "wallet":
        return <WalletScreen />;
      default:
        return <MainScreen />;
    }
  };

  return (
    <div className="app">
      {renderScreen()}
      <Navbar setActiveScreen={setActiveScreen} />
    </div>
  );
}