import type { ReactNode } from "react";

interface Props {
  eyebrow:   string;
  title:     ReactNode;
  lead?:     ReactNode;
  align?:    "left" | "center";
  children?: ReactNode;
}

/** Consistent section header: mono eyebrow, display title, optional lead and right-side slot. */
export function SectionHeading({ eyebrow, title, lead, align = "left", children }: Props) {
  const centered = align === "center";
  return (
    <div className={`mb-12 flex flex-col gap-6 ${centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"}`}>
      <div className={centered ? "max-w-2xl" : "max-w-3xl"}>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="heading text-balance">{title}</h2>
        {lead && <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400 text-pretty">{lead}</p>}
      </div>
      {children}
    </div>
  );
}
