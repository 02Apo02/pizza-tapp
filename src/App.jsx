import React, { useState, useEffect } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(5500);
  const [maxEnergy] = useState(5500);
  const [hourlyProfit] = useState(302549);

  const handlePizzaClick = () => {
    if (energy <= 0) return;
    setScore(score + 1);
    setEnergy(energy - 1);
  };

  useEffect(() => {
    const regen = setInterval(() => {
      setEnergy((prev) => (prev < maxEnergy ? prev + 10 : prev));
    }, 1000);
    return () => clearInterval(regen);
  }, [maxEnergy]);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.imgur.com/zDo0In2.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        paddingBottom: 80,
      }}
    >
      {/* Üst Bilgi */}
      <div style={{ padding: 20 }}>
        <h2>🍕 Pizza Tapp</h2>
        <p>Profit per hour: +{hourlyProfit.toLocaleString()}</p>
      </div>

      {/* Buton Menüsü */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0",
          flexWrap: "wrap",
        }}
      >
        {[
          "Daily Login",
          "Lucky Code",
          "Daily Bounty",
          "Achievements",
        ].map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: "#003366",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              textAlign: "center",
              minWidth: 80,
              fontSize: 12,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Puan Sayacı */}
      <h1 style={{ textAlign: "center", fontSize: 30, marginTop: 10 }}>
        🍕 {score.toLocaleString()}
      </h1>

      {/* Ortadaki Pizza */}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Pizza-300px.png"
          alt="pizza"
          onClick={handlePizzaClick}
          style={{
            width: 150,
            height: 150,
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
        />
        <p>Tap the pizza!</p>
      </div>

      {/* Enerji & Butonlar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <div>⚡ {energy}/{maxEnergy}</div>
        <button style={{ backgroundColor: "#5522ff", padding: "5px 15px", borderRadius: 10 }}>
          Frens
        </button>
        <button style={{ backgroundColor: "#ff5522", padding: "5px 15px", borderRadius: 10 }}>
          Boosts
        </button>
      </div>

      {/* Alt Navigasyon */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#001133",
          padding: "10px 0",
          color: "#fff",
          fontSize: 12,
        }}
      >
        {["HOME", "REWARDS", "EARN", "GIFT", "NFT"].map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}