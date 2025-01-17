"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="py-4 bg-[#fafafa] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Sunil Lakandri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
