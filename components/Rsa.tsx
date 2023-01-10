import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useVigenereState } from "../context/CipherContext";

type VigProps = {
  active: string;
  type: string;
};
export default function Rsa({ active, type }: VigProps) {
  const [encryptText, setencryptText] = useState<string>("");
  const [selected, setselected] = useState<string>("");
  const [m, setm] = useState<string>("");
  const [e, sete] = useState<string>("");
  const [n, setn] = useState<string>("");
  const [encryptkey, setencryptkey] = useState<string>("");
  interface EncryptItem {
    ciphertext: string;
    key: string;
    plaintext: string;
    result: string;
  }

  const [decrypt, setdecrypt] = useState<EncryptItem>();
  const isActive: boolean = useVigenereState();

  const fetchMe = async () => {
    if (encryptText && encryptkey) {
      try {
        const response = await fetch(
          `http://cypherlogic.co.uk:8080/crypto-0.1/rsa/encrypt/${m}/${n}/${e}`
        );
        const decrypt1 = await response.json();
        console.log(decrypt1.ciphertext);

        return setdecrypt(decrypt1);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const DecryptMe = async () => {
    if (decrypt && encryptkey) {
      try {
        const response = await fetch(
          `http://cypherlogic.co.uk:8080/crypto-0.1/rsa/decrypt/${decrypt.ciphertext}/${encryptkey}`
        );
        const decrypt1 = await response.json();
        console.log(decrypt1.plaintext);

        alert(`Your original text was ${decrypt1.plaintext}`);
        return setdecrypt(decrypt1);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (active === "rsa") {
    return (
      <div>
        <div className="text-center font-momcakeBold text-lg">
          <p> RSA </p>
        </div>
        <div className="m-4 items-center flex justify-center">
          <div className="flex space-x-4 items-center">
            <div>
              <div>
                <label className="font-momcakeBold">CHOSEN NUMBER</label>
              </div>
              <div className="">
                <input
                  onChange={(e) => setm(e.target.value.replace(/ /g, ""))}
                  className="bg-inherit border-2  border-blue-500 text-sm font-momcakeThin h-[200px] w-[600px] pl-2 pr-2 outline-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="flex-col">
              <div>
                <label className="font-momcakeBold"> PUBLIC KEY (n) </label>
              </div>
              <input
                onChange={(e) => setn(e.target.value.replace(/ /g, ""))}
                className="bg-inherit border-2 border-blue-500 text-left  font-momcakeThin items-center pl-2 pr-2 outline-1"
                type="text"
                name=""
                id=""
              />
              <div>
                <label className="font-momcakeBold"> PUBLIC KEY (e) </label>
              </div>
              <input
                onChange={(e) => sete(e.target.value.replace(/ /g, ""))}
                className="bg-inherit border-2 border-blue-500 text-left  font-momcakeThin items-center pl-2 pr-2 outline-1"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="ml-2 font-momcakeBold text-center text-blue-500 w-[150px] bg-slate-100 pt-1 pr-2 pl-2"
            onClick={fetchMe}
          >
            Encrypt
          </button>
        </div>
        {decrypt ? (
          <div>
            <label className="font-momcakeBold">Ciphertext</label>
            <div className="bg-inherit border-2  font-momcakeThin border-blue-500">
              {decrypt.ciphertext}
            </div>
            <div className="flex pt-4 items-center justify-center">
              <button
                className="ml-2 font-momcakeBold text-center text-blue-500 w-[150px] bg-slate-100 pt-1 pr-2 pl-2"
                onClick={DecryptMe}
              >
                Decrypt
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  return null;
}
