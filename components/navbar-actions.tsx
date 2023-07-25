"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={18} color="white" />
        <span className="ml-2 text-base font-medium text-white">2</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
