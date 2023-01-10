import React, { useReducer, Reducer } from "react";
export enum ActionKind {
  CEASAR = "CEASAR",
  CLEAR = "CLEAR",
}

interface startState {
  cipher: string;
  subcipher: string;
}

interface cipherAction {
  type: ActionKind;
  payload: { cipher: string; subcipher: string };
}

export const initialState = { cipher: "nill", subcipher: "maybe" };

export default function reducer(state: startState, action: cipherAction) {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.CEASAR:
      console.log(action.payload);
      return {
        cipher: action.payload.subcipher,
        subcipher: action.payload.subcipher,
      };
    case ActionKind.CLEAR:
      console.log(action.payload);
      return {
        cipher: action.payload.subcipher,
        subcipher: action.payload.subcipher,
      };
    default:
      return state;
  }
}
