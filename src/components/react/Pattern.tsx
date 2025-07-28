import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: number;
}

export function Pattern({ children, type = 1 }: Props) {
  if (type === 1) {
    return (
      <div className=" w-full bg-white relative">
        {/* Diagonal Stripes Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />
        {children}
        {/* Your Content/Components */}
      </div>
    );
  }

  if (type === 2) {
    return (
      <div className="w-full bg-white relative">
        {/* Amber Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, var(--secondary) 100%)
      `,
            backgroundSize: "100% 100%",
          }}
        />
        {children}

        {/* Your Content/Components */}
      </div>
    );
  }
}
