import React, { createContext, useContext, useState } from "react";


const FugitiveContext = createContext(); //fugCon holds context obj to share state between comps

export function FugitiveProvider({ children }) {// takes in child prop of fug n CB
  //s͟e͟t͟s s͟t͟a͟t͟e t͟o e͟m͟p͟t͟y a͟r͟r f͟r͟o͟m A͟p͟p 
  const [fugitives, setFugitives] = useState([]); // sets fugs state as an arr

  return (
    <FugitiveContext.Provider value={{ fugitives, setFugitives }}> 
      {children}
    </FugitiveContext.Provider>
  );
}

export function useFugitiveContext() {
  return useContext(FugitiveContext);
}
