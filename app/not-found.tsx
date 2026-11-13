import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        Missing
      </p>
      <h1 className="mt-3 text-5xl font-light uppercase tracking-[0.04em]">
        That page is not here
        <span className="text-mark">.</span>
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex text-[11px] font-medium uppercase tracking-[0.18em] hover:text-mark"
      >
        ← All work
      </Link>
    </main>
  );
}
