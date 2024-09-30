import { createContext } from "react";

export const CardContext = createContext<boolean>(false);

export const CardContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardContext.Provider value={true}>{children}</CardContext.Provider>;
};
