export function SectionLabel({ children }: { children: string }) {
  const label = children.endsWith(".") ? children.slice(0, -1) : children;

  return (
    <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">
      {label}
      <span className="text-mark">.</span>
    </h2>
  );
}
