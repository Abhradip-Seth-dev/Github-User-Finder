import { createContext, useState } from "react"

export const UIContext = createContext();

const UiContextProvider = ({children}) => {
    const [isSearchClicked,setisSearchClicked]=useState(false)
  return (
   <UIContext.Provider value={{isSearchClicked,setisSearchClicked}}>
    {children}
   </UIContext.Provider>
  )
}

export default UiContextProvider
