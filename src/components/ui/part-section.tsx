import { classNames } from "@/utils";
import { HTMLAttributes } from "react";

export function Section({className, ...rest}: HTMLAttributes<HTMLElement>) {
    return (
        <section className={classNames(className)} {...rest} />
    );
}
