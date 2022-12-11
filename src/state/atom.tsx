import { atom } from "recoil";

export const participantList = atom<string[]>({
  key: "participantList",
  default: [],
})
