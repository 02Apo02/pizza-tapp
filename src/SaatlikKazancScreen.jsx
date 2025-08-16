import React, { useState } from "react";

export default function SaatlikKazancScreen() {
  const [profit, setProfit] = useState(0);

  const handleCollect = () => {
    setProfit(profit + 60); // basit test mantığı
  };

  return (
    <div className="screen">
      <h2>💰 Saatlik Kazanç</h2>
      <p>Kazanç: {profit}</p>
      <button onClick={handleCollect}>Kazanç Topla</button>
    </div>
  );
}