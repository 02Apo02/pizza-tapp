import React, { useState } from "react";
import KartYukseltici from "./kartyukseltici";

export default function KartlarEkrani({ kartSeviye, setKartSeviye }) {
  const [aktifSayfa, setAktifSayfa] = useState(0);

  // Her sayfada 20 kart gösteriyoruz
  const kartlar = kartSeviye.slice(aktifSayfa * 20, (aktifSayfa + 1) * 20);

  return (
    <div style={{ padding: 20 }}>
      <h2>Saatlik Kazanç Kartları</h2>

      {/* Sayfa Seçici Butonlar */}
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setAktifSayfa(i)}
            style={{
              backgroundColor: aktifSayfa === i ? "#5522ff" : "#003366",
              color: "#fff",
              borderRadius: 5,
              padding: "5px 10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {i + 1}. Sayfa
          </button>
        ))}
      </div>

      {/* Kartlar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 10,
        }}
      >
        {kartlar.map((_, i) => (
          <KartYukseltici
            key={aktifSayfa * 20 + i}
            kartIndex={aktifSayfa * 20 + i}
            kartSeviye={kartSeviye}
            setKartSeviye={setKartSeviye}
          />
        ))}
      </div>
    </div>
  );
}