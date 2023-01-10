import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useVigenereState } from "../context/CipherContext";

export default function Rsakeygen(active: { active: boolean }) {
  const [encryptText, setencryptText] = useState<string>("");
  const [selected, setselected] = useState<string>("");
  const [encryptkey, setencryptkey] = useState<string>("");
  const [q, setq] = useState<string>("");
  const [decrypt, setdecrypt] = useState<EncryptItem>();
  interface EncryptItem {
    ciphertext: string;
    key: string;
    plaintext: string;
    result: string;
  }

  //   const isActive: boolean = active;

  const fetchMe = async () => {
    // if (encryptkey.length > 1) {
    //   alert("Please make key a single character");
    // }
    if (encryptText && encryptkey && q) {
      try {
        const response = await fetch(
          `http://cypherlogic.co.uk:8080/crypto-0.1/rsa/keygen/${q}/${encryptText}/${encryptkey}`
        );
        const decrypt1 = await response.json();
        // console.log(decrypt1);
        return setdecrypt(decrypt1);
      } catch (error) {}
    }
  };

  useEffect(() => {
    let getSelected: string | null;
    getSelected = localStorage.getItem("activeAlgorithm");
    if (getSelected) {
      setselected(getSelected);
    }
  }, [active]);
  //  && selected === "Simple Substituition Algorithms"
  if (active) {
    return (
      <div>
        <label> Plaintext </label>
        <input
          onChange={(e) => setencryptText(e.target.value.replace(/ /g, ""))}
          className="bg-inherit border-2 border-slate-600 items-center pl-2 pr-2 rounded-full focus:outline-none focus:ring-blue-500 focus:ring-1"
          type="text"
          name="ceasar_plaintext"
          id=""
        />
        <label> Key </label>
        <input
          onChange={(e) => setencryptkey(e.target.value.replace(/ /g, ""))}
          className="bg-inherit border-2 border-slate-600 pl-2 pr-2 rounded-full focus:outline-none focus:ring-blue-500 focus:ring-1"
          type="text"
          name="ceasar_key"
          id=""
        />
        <button className="ml-2" onClick={fetchMe}>
          Encrypt
        </button>
        {decrypt ? (
          <div className="bg-red-200">{decrypt.ciphertext}</div>
        ) : null}
      </div>
    );
  }
  return <div>herenot</div>;
}
