import React from "react";
import { ModeToggle } from "./ui/modeToggle";

export default function Header() {
  return (
    <header className="flex justify-end p-4">
      <ModeToggle />
    </header>
  );
}
