import React, { useContext, useEffect, useState } from "react";
import {
  useToggle,
  useVigenereState,
  useToggle2,
} from "../context/CipherContext";

interface HandleIDInterface {
  target: HTMLInputElement;
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

function handleClick(event: HTMLElementEvent<HTMLButtonElement>) {
  const { target } = event;
  const here = useToggle2(target.id);
  // console.log(useToggle2(target.id));
}
export default function Navbar() {
  const toggleActive = useToggle();

  const vifgi = useVigenereState();
  const [activeAlgorithm, setActiveAlgorithm] = useState<String>("");
  useEffect(() => {
    let selected: string | null;
    selected = localStorage.getItem("activeAlgorithm");
    if (selected) {
      setActiveAlgorithm(selected);
    }
  }, []);

  type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
  };

  function printID(event: HTMLElementEvent<HTMLButtonElement>) {
    const { target } = event;
    // const togglesActive = useToggle2(target.id);
    // console.log(togglesActive);
  }

  let SelectedAlgorithm = () => {
    if (activeAlgorithm === "Simple Substituition Algorithms") {
      return (
        <div className="  flex justify-center">
          <div className="mr-4 uppercase font-bold underline underline-offset-2 text-blue-500 text-sm">
            Available Ciphers :
          </div>
          <div className="max-w-3xl space-x-5 text-sm flex justify-between">
            {/* <button className="font-bold text-blue-500">CEASAR CIPHER</button> */}
            <button onClick={toggleActive} className="font-bold text-blue-500">
              VIGENERE CIPHER
            </button>
            <button
              id="jason"
              // onClick={printID}
              className="font-bold text-blue-500"
            >
              {" "}
              CEASAR CIPHER
            </button>
            <button className="font-bold text-blue-500"> ONE TIME PAD</button>
          </div>
        </div>
      );
    }
    if (activeAlgorithm === "Simple Transposition Algorithms") {
      return (
        <div className="flex justify-center mt-3">
          <div className="max-w-3xl space-x-5 flex justify-between">
            <button> Seytale Cipher</button>
            <button> Rail Cipher</button>
            <button> Route Cipher</button>
          </div>
        </div>
      );
    }
    return (
      <div className="text-center italic text-green-600">
        Select an algorithm to get started
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center p-1  ">
        <div className="max-w-3xl space-x-5 flex justify-between text-slate-100 ">
          <button
            className="hover:border-b-2 hover:border-slate-800 text-slate-800 font-momcakeBold"
            onClick={() => {
              setActiveAlgorithm("Simple Substituition Algorithms");
              localStorage.setItem(
                "activeAlgorithm",
                "Simple Substituition Algorithms"
              );
            }}
          >
            Simple Substituition Algorithms
          </button>
          <button
            className="font-momcakeBold  hover:border-b-2 hover:border-slate-800 text-slate-800"
            onClick={() => {
              setActiveAlgorithm("Simple Transposition Algorithms");
              localStorage.setItem(
                "activeAlgorithm",
                "Simple Transposition Algorithms"
              );
            }}
          >
            Simple Transposition Algorithms
          </button>
          <button className=" hover:border-b-2 hover:border-slate-800    text-slate-800 font-momcakeBold">
            Stream Cipher Algorithms
          </button>
          <button className=" hover:border-b-2 hover:border-slate-800 text-slate-800 font-momcakeBold">
            Block Cipher Algorithm
          </button>
        </div>
      </div>
      <div className="  flex justify-center">
        <div className="mr-4 uppercase font-bold underline underline-offset-2 text-blue-500 text-sm">
          Available Ciphers :
        </div>
        <div className="max-w-3xl space-x-5 text-sm flex justify-between">
          {/* <button className="font-bold text-blue-500">CEASAR CIPHER</button> */}
          <button onClick={toggleActive} className="font-bold text-blue-500">
            VIGENERE CIPHER
          </button>
          <button
            id="jason"
            // onClick={printID}
            className="font-bold text-blue-500"
          >
            {" "}
            CEASAR CIPHER
          </button>
          <button className="font-bold text-blue-500"> ONE TIME PAD</button>
        </div>
      </div>
      <SelectedAlgorithm />
    </div>
  );
}
