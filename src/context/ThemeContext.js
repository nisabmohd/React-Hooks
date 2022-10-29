import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark((scheme) => !scheme);
  };
  return <ThemeContext.Provider value={{dark,toggleTheme}}>{children}</ThemeContext.Provider>;
}
