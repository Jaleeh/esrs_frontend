// aes, des, triple des
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Vigenere from "../components/Vigenere";
import Caesar from "../components/Caesar";
import React, { useReducer, useState } from "react";
import { useVigenereState, useViState } from "../context/CipherContext";
import redcuer, { initialState } from "../reducers/CipherReducer";
import { ActionKind } from "../reducers/CipherReducer";
import Onetime from "../components/Onetime";
import StreamLFSR from "../components/StreamLFSR";
import Link from "next/link";
import Des from "../components/Des";
import Tripledes from "../components/Tripledes";
import Aes from "../components/Aes";

const Block: NextPage = () => {
  type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
  };
  const [state, dispatch] = useReducer(redcuer, initialState);
  const [sel, setsel] = useState({ vig: true, cea: false, ont: false });
  const [active, setactive] = useState("des");
  const reducerState = useViState();

  const visible = useVigenereState();
  const head: Boolean = false;
  function handleDes() {
    setactive("des");
  }
  function handleTdes() {
    setactive("3des");
  }
  function handleAes() {
    setactive("aes");
  }
  const encrypt: string = "encrypt";
  return (
    <div className="bg-green-400 min-h-screen p-2">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <div className="pl-4 pb-2  pt-2 cursor-pointer font-adelia text-[40px]">
            CipherMe
          </div>
        </Link>
        <div>
          <div className=" text-[12px] text-blue-500 font-extrabold">
            GOT A TEXT TO ENCRYPT?
          </div>
          <div className=" text-[10px] italic">
            Try one using one of these algorithms
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center p-1  ">
          <div className="max-w-3xl space-x-5 flex justify-between text-slate-100 ">
            <Link href="/">
              <button className="hover:border-b-2 hover:border-slate-800 text-slate-800 font-momcakeBold">
                Simple Substituition Algorithms
              </button>
            </Link>
            <Link href="/simpletranspo">
              <button className="font-momcakeBold  hover:border-b-2 hover:border-slate-800 text-slate-800">
                Simple Transposition Algorithms
              </button>
            </Link>
            <Link href="/stream">
              <button className=" hover:border-b-2 hover:border-slate-800    text-slate-800 font-momcakeBold">
                Stream Cipher Algorithms
              </button>
            </Link>
            <Link href="/block">
              <button className=" hover:border-b-2 hover:border-slate-800 text-slate-800 font-momcakeBold">
                Block Cipher Algorithms
              </button>
            </Link>
            <Link href="/pubgen">
              <button className=" hover:border-b-2 hover:border-slate-800 text-slate-800 font-momcakeBold">
                Public Key Encryption Algorithms
              </button>
            </Link>
          </div>
        </div>
        <div className="  flex justify-center">
          <div className="mr-4 uppercase font-bold underline underline-offset-2 text-blue-500 text-sm">
            Available Ciphers :
          </div>
          <div className="max-w-3xl space-x-5 text-sm flex justify-between">
            <button className="font-bold text-blue-500" onClick={handleDes}>
              DES
            </button>
            <button
              id="jason"
              onClick={handleTdes}
              className="font-bold text-blue-500"
            >
              TRIPLE DES
            </button>
            <button className="font-bold text-blue-500" onClick={handleAes}>
              {" "}
              AES
            </button>
          </div>
        </div>
      </div>
      <div className="border-2 h-[500px] p-4 mt-10 mr-8 ml-8 border-black ">
        <div className="mt-5">
          <Des active={active} type="encrypt" />
        </div>
        <div className="mt-5">
          <Tripledes active={active} type="" />
        </div>
        <div className="mt-5">
          <Aes active={active} type="" />
        </div>
      </div>
    </div>
  );
};

export default Block;
