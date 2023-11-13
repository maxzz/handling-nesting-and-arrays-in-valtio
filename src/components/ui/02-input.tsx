import { classNames } from "@/utils";
import { InputHTMLAttributes } from "react";

export const inputClasses = "my-1 px-2 py-1 ring-primary-500 ring-1 rounded";

export function Input({ label, className, ...rest }: { label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={classNames("flex items-center space-x-2", className)}>
            <div>{label}</div>
            <input className={inputClasses} {...rest} />
        </label>
    );
}
