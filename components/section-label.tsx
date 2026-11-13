export function SectionLabel({ children }: { children: string }) {
  const label = children.endsWith(".") ? children.slice(0, -1) : children;

  return (
    <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium uppercase leading-none tracking-[0.06em]">
      {label}
      <span className="text-mark">.</span>
    </h2>
  );
}
