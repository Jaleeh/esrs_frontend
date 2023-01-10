import React, { useContext, useState, useReducer } from "react";
import type { ReactNode } from "react";
import reducer, { initialState, ActionKind } from "../reducers/CipherReducer";
// import cipherReducer, { initialState } from "../reducers/CipherReducer";
interface selected {
  cipher: string;
  active: boolean;
}

type returnString = {
  getReducer: () => string;
};

const CipherContext = React.createContext({
  viginereState: false,
  ceasarState: false,
  state: {},
  toggleEntire: ({ cipher }: { cipher: string }) => {},
  toggleVigenereState: () => {},
  toggleReducer: () => {},
});

export const useToggle = () => {
  const { toggleVigenereState } = useContext(CipherContext);
  return toggleVigenereState;
};

export const useVigenereState = () => {
  const { viginereState } = useContext(CipherContext);
  return viginereState;
};
export const useViState = () => {
  const { state } = useContext(CipherContext);
  return state;
};

export const useGetReducerState = () => {
  const { toggleReducer } = useContext(CipherContext);
  return toggleReducer;
};

export const useToggle2 = (cipher: string) => {
  const { toggleEntire } = useContext(CipherContext);
  return toggleEntire({ cipher: cipher });
};

export const CipherProvider = ({ children }: { children: ReactNode }) => {
  // var { ceasarState, vigenereState } = cipherState;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [vigenereState, setVigenereState] = useState(false);
  const [seletectedCipher, setSeletectedCipher] = useState<selected>({
    cipher: "",
    active: false,
  });

  const [ceasarState, setCeasarState] = useState(false);

  const toggleVigenereState = () => {
    setVigenereState(!vigenereState);
  };

  const here = state;
  const toggleReducer = () => {
    dispatch({
      type: ActionKind.CLEAR,
      payload: { cipher: "comehere", subcipher: "nownownow" },
    });
  };

  const toggleEntire = ({ cipher }: { cipher: string }) => {
    setSeletectedCipher({ cipher: cipher, active: true });
  };

  const value = {
    viginereState: vigenereState,
    ceasarState: ceasarState,
    toggleEntire,
    toggleVigenereState,
    toggleReducer,
    state,
  };

  return (
    <CipherContext.Provider value={value}>{children}</CipherContext.Provider>
  );
};
