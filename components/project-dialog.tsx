"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/content/site";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProjectDialog({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const leaving = useRef(false);

  useEffect(() => {
    const previous = document.title;
    document.title = `${title} — ${site.profile.name}`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  function close() {
    if (leaving.current) return;
    leaving.current = true;
    setOpen(false);
    router.back();
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="top-0 left-0 h-dvh max-h-dvh w-screen max-w-none translate-x-0 translate-y-0 gap-0 overflow-y-auto rounded-none bg-white p-0 text-base ring-0 sm:max-w-none"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{description}</DialogDescription>
        <div className="sticky top-0 z-10 border-b border-border bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <DialogClose
              onClick={close}
              className="text-[11px] font-medium uppercase tracking-[0.18em] hover:text-mark"
            >
              ← Back
            </DialogClose>
            <DialogClose
              onClick={close}
              className="text-[11px] font-medium uppercase tracking-[0.18em] hover:text-mark"
            >
              Close
            </DialogClose>
          </div>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
}
