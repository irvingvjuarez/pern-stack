import { useMemo } from "react";
import { useNavigate } from "react-router-dom"

export const useAppFlow = (path?: string) => {
  const navigate = useNavigate()
  const to = path ? path : -1

  return () => {
    // @ts-ignore
    navigate(to);
  }
}