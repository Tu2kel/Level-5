import React, { createContext, useContext, useState } from "react";
// import { FugitiveProvider } from "./components/FugitiveContext";


const FugitiveContext = createContext();

export default function FugitiveProvider({ children }) {
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
