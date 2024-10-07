import { createContext } from "react";

/**
 * Context for tracking whether the grid is active.
 */
export const GridContext = createContext<boolean>(false);

export const GridContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <GridContext.Provider value={true}>{children}</GridContext.Provider>;
};
