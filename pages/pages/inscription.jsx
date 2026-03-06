import React, { useState } from "react";
import Header from "../components/Header";
import FixedMenu from "../components/FixedMenu";
import { supabase } from "../supabaseClient";

export default function Inscription() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [codeParrain, setCodeParrain] = useState("");

  const handleSignup = async () => {
    if(password !== confirm) return alert("Les mots de passe ne correspondent pas !");
    const { error } = await supabase.auth.signUp({ email, password });
    if(error) alert(error.message);
    else alert("Inscrit !");
  };

  return (
    <div>
      <Header />
      <div className="fullscreen-form">
        <input placeholder="Nom" value={nom} onChange={(e)=>setNom(e.target.value)} /><br/>
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
        <input type="password" placeholder="Confirmer mot de passe" value={confirm} onChange={(e)=>setConfirm(e.target.value)} /><br/>
        <input placeholder="Code parrain (facultatif)" value={codeParrain} onChange={(e)=>setCodeParrain(e.target.value)} /><br/>
        <button onClick={handleSignup}>S'inscrire</button>
        <p style={{ marginTop: "10px" }}>
          Déjà un compte ? <a href="/connexion" style={{ color: "#9b5de5" }}>Connectez-vous</a>
        </p>
      </div>
      <FixedMenu />
    </div>
  );
}
