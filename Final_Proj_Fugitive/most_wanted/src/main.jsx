import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FugitiveProvider } from "./components/FugitiveContext";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FugitiveProvider >
      <App />
    </FugitiveProvider>
  </React.StrictMode>


);
