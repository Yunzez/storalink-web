"use client"
import React, { createContext, useContext, useState, ReactNode, useRef, SetStateAction, Dispatch, useEffect } from "react";

interface GlobalContextProps {
  color: string;
  setColor: (color: string) => void;
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
  initialRender: boolean
}

export const GlobalContext = createContext<GlobalContextProps>({
  color: "",
  setColor: () => {},
  isOpen: false,
  setIsOpen: () => {},
  initialRender:  true 
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [color, setColor] = useState("red");
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    // After the initial render, set the initialRender flag to false
    setInitialRender(false);
  }, []);
  
  const [isOpen, setIsOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  return (
    <GlobalContext.Provider value={{ color, setColor, isOpen, setIsOpen, initialRender }}>
      {children}
    </GlobalContext.Provider>
  );
};
