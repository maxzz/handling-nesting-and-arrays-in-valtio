import { InputHTMLAttributes } from "react";

export const inputClasses = "px-2 py-1 ring-primary-500 ring-1 rounded";

export function Input({ label, className, ...rest }: { label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={className}>
            <div>({label})</div>
            <input className={inputClasses} {...rest} />
        </label>
    );
}
