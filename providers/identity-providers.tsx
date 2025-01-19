"use client";

import { IdentityProvider } from "@/context/IdentityContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <IdentityProvider>{children}</IdentityProvider>;
}
