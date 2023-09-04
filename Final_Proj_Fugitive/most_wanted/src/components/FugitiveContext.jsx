import React, { createContext, useContext, useState } from "react";


const FugitiveContext = createContext();

export function FugitiveProvider({ children }) {
  //sets state to empty arr from App 
  const [fugitives, setFugitives] = useState([]); 

  return (
    <FugitiveContext.Provider value={{ fugitives, setFugitives }}>
      {children}
    </FugitiveContext.Provider>
  );
}

export function useFugitiveContext() {
  return useContext(FugitiveContext);
}
