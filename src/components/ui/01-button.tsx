import { classNames } from "@/utils";
import { ButtonHTMLAttributes } from "react";

const buttonClasses = "px-2 py-1 \
ring-primary-500 ring-1 \
hover:bg-primary-100 \
active:scale-95 \
rounded shadow";

export function Button({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames(buttonClasses, className)} {...rest} />
    );
}
