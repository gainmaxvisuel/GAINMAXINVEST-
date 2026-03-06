import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FixedMenu from "../components/FixedMenu";
import { supabase } from "../supabaseClient";

export default function MesVIP() {
  const [userVIPs, setUserVIPs] = useState([]);

  useEffect(() => {
    const fetchUserVIPs = async () => {
      const user = supabase.auth.getUser(); // Adapté à ton système
      let { data } = await supabase.from("user_vips").select("*").eq("user_id", user?.data?.user?.id);
      setUserVIPs(data);
    };
    fetchUserVIPs();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ margin: "20px" }}>
        {userVIPs.map(u => (
          <div key={u.id} style={{
            backgroundColor: "#1f1f1f",
            marginBottom: "15px",
            padding: "15px",
            borderRadius: "12px"
          }}>
            <p>VIP: {u.vip_id}</p>
            <p>Revenu cumulé: {u.revenu_total}</p>
            <p>Revenu quotidien: {u.revenu_journalier}</p>
            <p>Statut: {u.statut ? "Actif" : "Inactif"}</p>
          </div>
        ))}
      </div>
      <FixedMenu />
    </div>
  );
}
