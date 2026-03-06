import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FixedMenu from "../components/FixedMenu";
import { supabase } from "../supabaseClient";

export default function Accueil() {
  const [vipList, setVipList] = useState([]);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const fetchVIPs = async () => {
      let { data } = await supabase.from("vips").select("*");
      setVipList(data);
    };
    fetchVIPs();
  }, []);

  return (
    <div>
      <Header />

      {/* Pop-up Telegram */}
      {showPopup && (
        <div style={{
          position: "fixed", top: 50, left: "50%", transform: "translateX(-50%)",
          backgroundColor: "#1f1f1f", color: "white", padding: "20px",
          borderRadius: "15px", zIndex: 1000, textAlign: "center"
        }}>
          <p>Rejoignez notre canal Telegram</p>
          <a href="https://t.me/gainmaxvisuel" target="_blank" rel="noreferrer">
            <button style={{ margin: "5px" }}>Rejoindre</button>
          </a>
          <button style={{ margin: "5px" }} onClick={() => setShowPopup(false)}>Annuler</button>
        </div>
      )}

      {/* Liste VIP */}
      <div style={{ margin: "20px" }}>
        {vipList.map(vip => (
          <div key={vip.id} style={{
            backgroundColor: "#1f1f1f",
            marginBottom: "15px",
            padding: "15px",
            borderRadius: "12px"
          }}>
            <p>Nom VIP: {vip.nom_vip}</p>
            <p>Montant: {vip.montant}</p>
            <p>Revenu quotidien: {vip.revenu_quotidien}</p>
            <p>Durée: {vip.duree} jours</p>
            <p>Revenu total: {vip.revenu_total}</p>
            <button>Investir</button>
          </div>
        ))}
      </div>

      <FixedMenu />
    </div>
  );
                          }
