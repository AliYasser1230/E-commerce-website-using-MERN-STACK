import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const total = atom({
  key:"total",
  default: 0,
});