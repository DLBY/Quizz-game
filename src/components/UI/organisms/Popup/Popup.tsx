import { Settings } from "@/components";
import React from "react";

interface PopupProps {
  children?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onClick?: () => void;
}

export const Popup = ({ children, title, isOpen, onClick } : PopupProps) => {
  
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex min-h-full w-full justify-center overflow-auto bg-green-dark/80">
      <div className="flex flex-wrap justify-center md:flex-nowrap md:space-x-4 lg:mt-0 w-full max-w-md items-center">
        <div className="relative bg-white p-8 mb-12 mt-28">
          <div className="inset-0 z-0 rounded-lg">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <Settings />
          </div>
          <button className="absolute right-0 top-0 p-4 bg-red text-white" onClick={onClick}>X
          </button>
        </div>
      </div>
    </div>
  );
};