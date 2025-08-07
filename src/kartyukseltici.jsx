import React, { useState } from "react";

export default function KartYukseltici({ kartSeviye, setKartSeviye, kartIndex }) {
  const [gosterReklam, setGosterReklam] = useState(false);
  const [reklamIzleniyor, setReklamIzleniyor] = useState(false);
  const [reklamBekleme, setReklamBekleme] = useState({});

  const reklamIzle = () => {
    const now = Date.now();
    const sonIzleme = reklamBekleme[kartIndex] || 0;

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

  return (
    <div
      style={{
        border: "1px solid #fff",
        borderRadius: 10,
        padding: 10,
        margin: 5,
        backgroundColor: "#002244",
        color: "#fff",
      }}
    >
      <p>
        Kart {kartIndex + 1} - Seviye: {kartSeviye[kartIndex]}
      </p>
      <button
        onClick={() =>
          setKartSeviye((prev) => {
            const yeni = [...prev];
            yeni[kartIndex] += 1;
            return yeni;
          })
        }
        style={{ marginRight: 10 }}
      >
        Coin ile Yükselt
      </button>

      <button onClick={() => setGosterReklam(true)}>Reklam İzle +1 Seviye</button>

      {gosterReklam && (
        <div style={{ backgroundColor: "#000000aa", padding: 10, marginTop: 10 }}>
          {reklamIzleniyor ? (
            <p>Reklam izleniyor...⏳</p>
          ) : (
            <>
              <p>5 saniyelik reklam simülasyonu</p>
              <button onClick={reklamIzle} style={{ marginRight: 10 }}>
                Reklamı Başlat
              </button>
              <button onClick={() => setGosterReklam(false)}>Kapat</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}