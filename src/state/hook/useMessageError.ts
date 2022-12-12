import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState } from "../atom";

export const useMessageError = () => {
  const messageError = useRecoilValue(erroState);
  return messageError;
}