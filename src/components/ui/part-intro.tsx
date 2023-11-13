import { HTMLAttributes, ReactNode } from "react";

export function PartIntro({ section, h1 = true, children, ...rest }: { section: ReactNode; h1?: boolean; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="" {...rest}>
            <div className={`w-full ${h1 ? 'text-2xl': 'text-xl'} border-primary-600 border-b`}>{section}</div>
            <div className="text-xs">
                {children}
            </div>
        </div>
    );
}
