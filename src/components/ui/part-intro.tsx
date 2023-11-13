import { HTMLAttributes, ReactNode } from "react";

const h1Classes = "text-2xl border-primary-600 border-b";
const h2Classes = "text-sm font-semibold bg-primary-200";

export function PartIntro({ section, h1 = true, children, ...rest }: { section: ReactNode; h1?: boolean; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="mt-4" {...rest}>
            <div className={`w-full ${h1 ? h1Classes : h2Classes}`}>
                {section}
            </div>

            <div className="text-xs">
                {children}
            </div>
        </div>
    );
}
