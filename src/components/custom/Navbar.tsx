// components/Navbar.tsx
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bg-card shadow-md  p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
