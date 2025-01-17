// components/sidebar/Sidebar.tsx
"use client";

import Profile from "./Profile";
import TechStack from "./TechStack";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IdentityProvider, useIdentity } from "@/context/IdentityContext";
import { Music } from "lucide-react";

const SidebarContent = () => {
  const { currentIdentity, toggleIdentity } = useIdentity();

  return (
    <div className="relative w-[450px] h-full bg-white border-r border-gray-200 overflow-hidden">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0 bg-grid-gray-900/[0.2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
      </div>

      {/* Subtle Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      {/* Circuit Board Lines - Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-[2px] left-20 w-[1px] h-16 bg-gradient-to-b from-gray-200 to-transparent" />
      <div className="absolute top-[2px] right-20 w-[1px] h-24 bg-gradient-to-b from-gray-200 to-transparent" />

      {/* Circuit Board Lines - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-[2px] left-32 w-[1px] h-20 bg-gradient-to-t from-gray-200 to-transparent" />
      <div className="absolute bottom-[2px] right-40 w-[1px] h-12 bg-gradient-to-t from-gray-200 to-transparent" />

      {/* Content */}
      <ScrollArea className="h-screen relative z-10">
        <div className="px-8 py-5">
          <div className="relative">
            <div className="absolute -left-6 top-1/2 w-4 h-[2px] bg-gradient-to-r from-gray-200 to-transparent" />
            <div className="absolute -right-6 top-1/2 w-4 h-[2px] bg-gradient-to-l from-gray-200 to-transparent" />
            <Profile />
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-6 w-4 h-[2px] bg-gradient-to-l from-gray-200 to-transparent" />
            <TechStack />

            {/* Identity Switcher */}
            <div className="mt-4 relative">
              <div className="absolute -right-6 top-1/2 w-4 h-[2px] bg-gradient-to-l from-gray-200 to-transparent" />
              <div className="px-4 py-3 rounded-lg bg-gradient-to-r from-purple-50/50 to-transparent border border-gray-100">
                <p className="text-gray-600 text-sm font-medium">
                  Wanna see me as a musician?
                  <span
                    onClick={toggleIdentity}
                    className="ml-1 text-purple-500 hover:text-purple-600 cursor-pointer transition-colors inline-flex items-center gap-1"
                  >
                    Click here
                    <Music className="w-3 h-3" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-white/10" />
    </div>
  );
};

const Sidebar = () => {
  return (
    <IdentityProvider>
      <SidebarContent />
    </IdentityProvider>
  );
};

export default Sidebar;
