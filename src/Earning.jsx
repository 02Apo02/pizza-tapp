import React, { useEffect, useState } from "react";
export default function Earnings(){
  const [balance, setBalance] = useState(() => Number(localStorage.getItem("pt_balance")||0));
  useEffect(()=>localStorage.setItem("pt_balance", String(balance)),[balance]);

  return (
    <div className="screen">
      <div className="title">⏳ Saatlik Kazanç</div>
      <div className="card center" style={{height:140, flexDirection:"column"}}>
        <div className="subtle">Toplam Coin</div>
        <div className="big">{balance}</div>
        <button onClick={()=>setBalance(b=>b+120)} style={{marginTop:12}}>+120 Topla</button>
      </div>
    </div>
  );
}