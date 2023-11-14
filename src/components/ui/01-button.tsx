import { classNames } from "@/utils";
import { ButtonHTMLAttributes } from "react";

const buttonClasses = "px-2 py-0.5 \
ring-primary-500/50 ring-1 \
hover:bg-primary-100 \
active:scale-[.97] \
rounded shadow";

export function Button({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames(buttonClasses, className)} {...rest} />
    );
}
