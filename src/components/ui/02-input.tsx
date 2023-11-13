import { classNames } from "@/utils";
import { InputHTMLAttributes } from "react";

export const inputClasses = "my-1 px-2 py-1 ring-primary-500 ring-1 rounded";

export const counterClasses = "\
absolute px-1 py-0.5 top-2.5 right-2 text-xs font-semibold \
text-primary-600 bg-primary-200 border-primary-300 \
border rounded shadow\
flex items-center";

export function Input({ label, updateCnt, className, ...rest }: { label: string; updateCnt?: number; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={classNames("flex items-center space-x-2", className)}>
            <div>
                {label}
            </div>

            <div className="relative">
                <input className={inputClasses} spellCheck="false" {...rest} />

                {updateCnt !== undefined && (
                    <div className={counterClasses}>{updateCnt}</div>
                )}
            </div>
        </label>
    );
}
