import { classNames } from "@/utils";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

const buttonClasses = "px-2 py-1 ring-primary-500 ring-1 rounded";

export function Button({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames(buttonClasses, className)} {...rest} />
    );
}
