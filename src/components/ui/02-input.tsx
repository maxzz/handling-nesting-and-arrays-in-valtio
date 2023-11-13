import { classNames } from "@/utils";
import { InputHTMLAttributes } from "react";

export const inputClasses = "my-1 px-2 py-1 ring-primary-500 ring-1 rounded";
export const counterClasses = "absolute top-2 right-2 aspect-square text-xs p-1 text-primary-600 bg-primary-200 rounded shadow";

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
