"use client";

import React, { createContext, useContext, useState } from "react";

type IdentityType = "developer" | "musician";

interface IdentityContextType {
  currentIdentity: IdentityType;
  toggleIdentity: () => void;
}

const IdentityContext = createContext<IdentityContextType | undefined>(
  undefined
);

export function IdentityProvider({ children }: { children: React.ReactNode }) {
  const [currentIdentity, setCurrentIdentity] =
    useState<IdentityType>("developer");

  const toggleIdentity = () => {
    setCurrentIdentity((prev) =>
      prev === "developer" ? "musician" : "developer"
    );
  };

  return (
    <IdentityContext.Provider value={{ currentIdentity, toggleIdentity }}>
      {children}
    </IdentityContext.Provider>
  );
}

export const useIdentity = () => {
  const context = useContext(IdentityContext);
  if (!context) {
    throw new Error("useIdentity must be used within an IdentityProvider");
  }
  return context;
};
