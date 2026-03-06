import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FixedMenu from "../components/FixedMenu";
import { supabase } from "../supabaseClient";

export default function Equipe() {
  const [teamStats, setTeamStats] = useState([
    { niveau: 1, pourcentage: "27%", taille: 0, recharge: 0, commission: 0 },
    { niveau: 2, pourcentage: "2%", taille: 0, recharge: 0, commission: 0 },
    { niveau: 3, pourcentage: "1%", taille: 0, recharge: 0, commission: 0 }
  ]);

  // Ici tu peux remplacer les 0 par de vrais calculs depuis Supabase
  // Exemple: fetch de l'équipe et calcul taille, recharge, commission

  return (
    <div>
      <Header />
      <div style={{ margin: "20px" }}>
        {teamStats.map(level => (
          <div key={level.niveau} style={{
            backgroundColor: "#1f1f1f",
            marginBottom: "15px",
            padding: "15px",
            borderRadius: "12px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Niveau: {level.niveau}</div>
              <div>Taille: {level.taille}</div>
              <div>Recharge: {level.recharge}</div>
              <div>Commission: {level.commission}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <div>Pourcentage: {level.pourcentage}</div>
              <div>Taille totale: {level.taille}</div>
              <div>Recharge totale: {level.recharge}</div>
              <div>Commission gagnée: {level.commission}</div>
            </div>
          </div>
        ))}
      </div>
      <FixedMenu />
    </div>
  );
}
