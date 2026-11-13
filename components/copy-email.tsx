"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.append(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      setState(copied ? "copied" : "error");
    }
    window.setTimeout(() => setState("idle"), 2000);
  }

  const label =
    state === "copied" ? "Copied" : state === "error" ? "Copy failed" : "Copy email";

  return (
    <Button
      type="button"
      variant="outline"
      onClick={copy}
      className="mt-6 h-10 rounded-none px-4 text-[11px] font-medium uppercase tracking-[0.18em]"
    >
      {label}
    </Button>
  );
}
