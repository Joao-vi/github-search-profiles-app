import { useContext } from "react";
import { gitContext } from "../context/gitHubContext";

export function useApi() {
  const value = useContext(gitContext);
  return value;
}
