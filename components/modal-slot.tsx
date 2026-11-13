"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function ModalSlot({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const show =
    pathname.startsWith("/work/") || pathname.startsWith("/personal/");

  if (!show) return null;
  return children;
}
