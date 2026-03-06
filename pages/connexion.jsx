import React, { useState } from "react";
import Header from "../components/Header";
import FixedMenu from "../components/FixedMenu";
import { supabase } from "../supabaseClient";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else alert("Connecté !");
  };

  return (
    <div>
      <Header />
      <div className="center-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "8px", padding: "10px", width: "250px" }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "8px", padding: "10px", width: "250px" }}
        />
        <button onClick={handleLogin} style={{ marginTop: "12px" }}>
          Se connecter
        </button>
        <p style={{ marginTop: "10px" }}>
          Pas de compte ? <a href="/inscription" style={{ color: "#9b5de5" }}>S'inscrire</a>
        </p>
      </div>
      <FixedMenu />
    </div>
  );
}
