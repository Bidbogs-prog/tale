"use client";

import React from "react";
import { Gift } from "lucide-react";
import { useRouter } from "next/navigation";

const GiftButton = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-50 flex items-center justify-center">
      <button
        onClick={() => router.push("/poem")}
        className="group relative transform transition-transform duration-300 hover:scale-110 focus:outline-none"
      >
        {/* Gift box base */}
        <div className="relative">
          {/* Box body */}
          <div className="w-32 h-32 bg-red-500 rounded-lg shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:bg-red-600">
            <Gift
              size={48}
              className="text-white transform transition-all duration-300 group-hover:scale-110"
            />
          </div>

          {/* Ribbon */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-pink-400 rounded-full shadow-md transform transition-all duration-300 group-hover:bg-pink-500" />
          </div>

          {/* Ribbon tails */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-4 bg-pink-400 rounded-full transform transition-all duration-300 group-hover:bg-pink-500" />
          </div>
        </div>

        {/* Hover text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-red-800 font-medium text-lg whitespace-nowrap">
            Open Your Gift
          </p>
        </div>
      </button>
    </div>
  );
};

export default GiftButton;
