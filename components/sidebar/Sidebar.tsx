"use client";

import Profile from "./Profile";
import TechStack from "./TechStack";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIdentity } from "@/context/IdentityContext";
import { Music, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const { currentIdentity, toggleIdentity } = useIdentity();
  const isDeveloper = currentIdentity === "developer";

  return (
    <div
      className={cn(
        "relative w-[320px] lg:w-[450px] h-full border-r overflow-hidden",
        isDeveloper
          ? "bg-white border-gray-200"
          : "bg-[#323232] border-zinc-800"
      )}
    >
      {/* Tech Pattern Background */}
      <div
        className={cn(
          "absolute inset-0",
          isDeveloper ? "opacity-[0.03]" : "opacity-[0.07]"
        )}
      >
        <div
          className="absolute inset-0 bg-grid-gray-900/[0.2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            isDeveloper
              ? "from-blue-50/50 via-transparent to-purple-50/50"
              : "from-zinc-800/30 via-transparent to-zinc-700/30"
          )}
        />
      </div>

      {/* Subtle Light Effects */}
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-40 bg-gradient-to-b",
            isDeveloper
              ? "from-white via-white/90 to-transparent"
              : "from-[#323232] via-[#323232]/90 to-transparent"
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t",
            isDeveloper
              ? "from-white via-white/90 to-transparent"
              : "from-[#323232] via-[#323232]/90 to-transparent"
          )}
        />
      </div>

      {/* Circuit Board Lines */}
      <div className="hidden lg:block">
        {/* Top Lines */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent",
            !isDeveloper && "via-zinc-700"
          )}
        />
        <div
          className={cn(
            "absolute top-[2px] left-20 w-[1px] h-16 bg-gradient-to-b",
            isDeveloper ? "from-gray-200" : "from-zinc-700",
            "to-transparent"
          )}
        />
        <div
          className={cn(
            "absolute top-[2px] right-20 w-[1px] h-24 bg-gradient-to-b",
            isDeveloper ? "from-gray-200" : "from-zinc-700",
            "to-transparent"
          )}
        />

        {/* Bottom Lines */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent",
            !isDeveloper && "via-zinc-700"
          )}
        />
        <div
          className={cn(
            "absolute bottom-[2px] left-32 w-[1px] h-20 bg-gradient-to-t",
            isDeveloper ? "from-gray-200" : "from-zinc-700",
            "to-transparent"
          )}
        />
        <div
          className={cn(
            "absolute bottom-[2px] right-40 w-[1px] h-12 bg-gradient-to-t",
            isDeveloper ? "from-gray-200" : "from-zinc-700",
            "to-transparent"
          )}
        />
      </div>

      {/* Content */}
      <ScrollArea className="h-screen relative z-10">
        <div className="px-4 lg:px-8 py-5">
          <div className="relative">
            <div
              className={cn(
                "absolute -left-6 top-1/2 w-4 h-[2px] bg-gradient-to-r to-transparent hidden lg:block",
                isDeveloper ? "from-gray-200" : "from-zinc-700"
              )}
            />
            <div
              className={cn(
                "absolute -right-6 top-1/2 w-4 h-[2px] bg-gradient-to-l to-transparent hidden lg:block",
                isDeveloper ? "from-gray-200" : "from-zinc-700"
              )}
            />
            <Profile />
          </div>

          <div className="relative">
            <div
              className={cn(
                "absolute -right-6 top-6 w-4 h-[2px] bg-gradient-to-l to-transparent hidden lg:block",
                isDeveloper ? "from-gray-200" : "from-zinc-700"
              )}
            />
            <TechStack />

            {/* Identity Switcher */}
            <div className="mt-4 relative">
              <div
                className={cn(
                  "absolute -right-6 top-1/2 w-4 h-[2px] bg-gradient-to-l to-transparent hidden lg:block",
                  isDeveloper ? "from-gray-200" : "from-zinc-700"
                )}
              />
              <div
                className={cn(
                  "px-4 py-3 rounded-lg border",
                  isDeveloper
                    ? "bg-gradient-to-r from-purple-50/50 to-transparent border-gray-100"
                    : "bg-gradient-to-r from-zinc-800/50 to-transparent border-zinc-700"
                )}
              >
                <p
                  className={cn(
                    "text-sm font-medium flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2",
                    isDeveloper ? "text-gray-600" : "text-zinc-400"
                  )}
                >
                  <span>
                    {isDeveloper
                      ? "Wanna see me as a musician?"
                      : "Switch back to developer mode"}
                  </span>
                  <button
                    onClick={toggleIdentity}
                    className={cn(
                      "inline-flex items-center gap-1 transition-colors",
                      isDeveloper
                        ? "text-purple-500 hover:text-purple-600"
                        : "text-zinc-400 hover:text-zinc-300"
                    )}
                  >
                    Switch Profile
                    {isDeveloper ? (
                      <Music className="w-3 h-3" />
                    ) : (
                      <Code2 className="w-3 h-3" />
                    )}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Overlay gradient for depth */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none bg-gradient-to-br",
          isDeveloper
            ? "from-white/10 via-transparent to-white/10"
            : "from-zinc-900/10 via-transparent to-zinc-900/10"
        )}
      />
    </div>
  );
};

export default Sidebar;
