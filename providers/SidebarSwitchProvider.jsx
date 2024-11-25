"use client";
import { createContext } from "react";
const SidebarContext = createContext();
import { useState } from "react";

 function SidebarProvider({ children }) {
  const [sidebar, setSidebar] = useState('left-[100%]');

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export{SidebarProvider, SidebarContext}