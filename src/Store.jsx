import React from "react";
import { getTon } from "./ton";
const RECEIVER = "UQBdCzXMRUn_-Ahrna9PjweEvWcBek3xyeNbjQYHndnBicuZ";

export default function Store() {
  const ton = getTon();

  const buyTon = async (amountTon) => {
    const tx = {
      validUntil: Math.floor(Date.now()/1000) + 600,
      messages: [{ address: RECEIVER, amount: String(amountTon * 1e9) }]
    };
    try { await ton.sendTransaction(tx); alert("Satın alma başarılı ✔"); }
    catch { alert("İşlem iptal/başarısız"); }
  };

  return (
    <div className="screen">
      <div className="title">🏪 Mağaza</div>
      <div className="grid">
        <div className="card">
          <div className="subtle">Starter Boost</div>
          <div className="big">x2</div>
          <button onClick={() => buyTon(0.15)} style={{marginTop:10}}>0.15 TON</button>
        </div>
        <div className="card">
          <div className="subtle">Mega Tap</div>
          <div className="big">+500</div>
          <button onClick={() => buyTon(0.35)} style={{marginTop:10}}>0.35 TON</button>
        </div>
        <div className="card">
          <div className="subtle">Ad-Free 7gün</div>
          <div className="big">PRO</div>
          <button onClick={() => buyTon(0.5)} style={{marginTop:10}}>0.5 TON</button>
        </div>
        <div className="card">
          <div className="subtle">Skin Pack</div>
          <div className="big">🎨</div>
          <button onClick={() => buyTon(0.25)} style={{marginTop:10}}>0.25 TON</button>
        </div>
      </div>
    </div>
  );
}