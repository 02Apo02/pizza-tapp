import React, { useEffect, useState } from "react";
import { getTon } from "./ton";

// Ödemelerin akacağı adres (senin verdiğin TON adresi)
const RECEIVER = "UQBdCzXMRUn_-Ahrna9PjweEvWcBek3xyeNbjQYHndnBicuZ";

export default function Wallet() {
  const ton = getTon();
  const [address, setAddress] = useState(null);
  const [walletName, setWalletName] = useState(null);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    // mevcut bağlantıyı yakala
    const sub = ton.onStatusChange((w) => {
      if (w?.account?.address) {
        setAddress(w.account.address);
        setWalletName(w.device?.appName || "Wallet");
      } else {
        setAddress(null);
        setWalletName(null);
      }
    });
    // sayfa yenilendiğinde bağlı cüzdanı getir
    if (ton.account) setAddress(ton.account.address);
    return () => sub();
  }, [ton]);

  const connect = async () => {
    setConnecting(true);
    try {
      await ton.connectWallet();
    } catch (e) {
      alert("Bağlantı iptal/başarısız");
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = async () => {
    await ton.disconnect();
  };

  const payTon = async (amountTon = 0.2) => {
    const tx = {
      validUntil: Math.floor(Date.now()/1000) + 600,
      messages: [{ address: RECEIVER, amount: String(amountTon * 1e9) }]
    };
    try {
      await ton.sendTransaction(tx);
      alert("Ödeme gönderildi ✔");
    } catch (e) {
      alert("Ödeme iptal/başarısız");
    }
  };

  return (
    <div className="screen">
      <div className="title">💰 Cüzdan</div>
      {!address ? (
        <div className="card center" style={{height:160, flexDirection:"column"}}>
          <div className="subtle" style={{marginBottom:10}}>TON cüzdanınızı bağlayın</div>
          <button onClick={connect} disabled={connecting}>
            {connecting ? "Bağlanıyor..." : "Cüzdanı Bağla"}
          </button>
        </div>
      ) : (
        <div className="card">
          <div className="subtle">Bağlı cüzdan</div>
          <div style={{wordBreak:"break-all", margin:"6px 0 12px"}}>
            {walletName ? `${walletName} • ` : ""}{address}
          </div>
          <div style={{display:"flex", gap:8}}>
            <button onClick={() => payTon(0.2)}>0.2 TON Gönder (test)</button>
            <button onClick={disconnect}>Bağlantıyı Kes</button>
          </div>
        </div>
      )}
    </div>
  );
}