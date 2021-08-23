import { createContext, useState, ReactNode, useContext } from "react";

type OppenedContextData = {
  status: boolean;
  changeStatus: (val: boolean) => void;
}

type PlayerContextProviderProps = {
  children: ReactNode;
}

export const OppenedContext = createContext({} as OppenedContextData);

export function OppenedContextProvider({ children }: PlayerContextProviderProps) {
  const [status, setStatus] = useState(false);

  function changeStatus(val: boolean) {
    setStatus(val);
  }

  return (
    <OppenedContext.Provider
      value={{
        status,
        changeStatus
      }}
    >
      {children}
    </OppenedContext.Provider>
  )
}

export const useOppenedContext = () => {
  return useContext(OppenedContext);
}