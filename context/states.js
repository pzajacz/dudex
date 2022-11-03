
import {createContext, useContext, useState} from "react";

const AppContext = createContext(undefined, undefined);

export function AppWrapper({children}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activePopup, setActivePopup] = useState(null)
  const [hasGallery, setHasGallery] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  return (
    <AppContext.Provider value={{activeMenu, setActiveMenu, activePopup, setActivePopup, showGallery, setShowGallery, hasGallery, setHasGallery}}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}