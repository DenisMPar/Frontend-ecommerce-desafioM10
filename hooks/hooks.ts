import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import useSWR from "swr";

export const queryState = atom({
  key: "queryState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
