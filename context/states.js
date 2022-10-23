
import {createContext, useContext, useState} from "react";

const AppContext = createContext(undefined, undefined);

export function AppWrapper({children}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activePopup, setActivePopup] = useState(null)
  return (
    <AppContext.Provider value={{activeMenu, setActiveMenu, activePopup, setActivePopup}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}