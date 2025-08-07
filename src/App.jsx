// KartYukseltici.jsx import React, { useState } from "react";

export default function KartYukseltici({ kartSeviye, setKartSeviye, kartIndex }) { const [gosterReklam, setGosterReklam] = useState(false); const [reklamIzleniyor, setReklamIzleniyor] = useState(false); const [reklamBekleme, setReklamBekleme] = useState({});

const reklamIzle = () => { const now = Date.now(); const sonIzleme = reklamBekleme[kartIndex] || 0;

if (now - sonIzleme < 2 * 60 * 60 * 1000) {
  alert("Bu kart için reklam izleyerek yükseltme 2 saatte bir yapılabilir.");
  return;
}

setReklamIzleniyor(true);
setTimeout(() => {
  setKartSeviye((prev) => {
    const yeni = [...prev];
    yeni[kartIndex] += 1;
    return yeni;
  });
  setReklamIzleniyor(false);
  setGosterReklam(false);
  setReklamBekleme({ ...reklamBekleme, [kartIndex]: Date.now() });
}, 5000); // 5 saniyelik reklam simülasyonu

};

return ( <div style={{ border: "1px solid #fff", borderRadius: 10, padding: 10, margin: 5 }}> <p>Kart {kartIndex + 1} - Seviye: {kartSeviye[kartIndex]}</p> <button onClick={() => setKartSeviye((prev) => { const yeni = [...prev]; yeni[kartIndex] += 1; return yeni; })}> Coin ile Yükselt </button>

<button onClick={() => setGosterReklam(true)}>Reklam İzle +1 Seviye</button>

  {gosterReklam && (
    <div style={{ backgroundColor: "#000000aa", padding: 10, marginTop: 10 }}>
      {reklamIzleniyor ? (
        <p>Reklam izleniyor...⏳</p>
      ) : (
        <>
          <p>5 saniyelik reklam simülasyonu</p>
          <button onClick={reklamIzle}>Reklamı Başlat</button>
          <button onClick={() => setGosterReklam(false)}>Kapat</button>
        </>
      )}
    </div>
  )}
</div>

); }

// App.jsx içinde örnek 3 ekranlı sistem // kartSeviye, setKartSeviye App içinde useState ile tanımlanmalı: // const [kartSeviye, setKartSeviye] = useState(Array(60).fill(1));

// 3 bölmeli gösterim örneği:

import React, { useState } from "react"; import KartYukseltici from "./KartYukseltici";

export function KartlarEkrani() { const [kartSeviye, setKartSeviye] = useState(Array(60).fill(1)); const [aktifSayfa, setAktifSayfa] = useState(0);

const kartlar = kartSeviye.slice(aktifSayfa * 20, (aktifSayfa + 1) * 20);

return ( <div style={{ padding: 20 }}> <h2>Saatlik Kazanç Kartları</h2>

<div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
    {[0, 1, 2].map((i) => (
      <button key={i} onClick={() => setAktifSayfa(i)}>
        {i + 1}. Sayfa
      </button>
    ))}
  </div>

  {kartlar.map((_, i) => (
    <KartYukseltici
      key={aktifSayfa * 20 + i}
      kartIndex={aktifSayfa * 20 + i}
      kartSeviye={kartSeviye}
      setKartSeviye={setKartSeviye}
    />
  ))}
</div>

); }

