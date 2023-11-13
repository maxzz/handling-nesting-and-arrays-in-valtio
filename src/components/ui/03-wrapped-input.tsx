import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { Input } from "./02-input";

const inputClasses = "px-2 py-1 ring-primary-500 ring-1 rounded";

type WrappedInputProps = {
    label: string;
    data: Record<string, string | object>;
    prop: string;
} & HTMLAttributes<HTMLDivElement>;

export const WrappedInput = ({ label, data, prop, ...rest }: WrappedInputProps) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);

    const value = s[prop];
    if (typeof value !== 'string') {
        throw new Error('This component should only be used for objects');
    }

    return (
        <div className="flex items-center space-x-2" {...rest}>
            <div className="flex items-center space-x-1">
                <div>({label})</div>
                <div>({cnt})</div>
            </div>

            <Input label={prop} value={value} onChange={(e) => data[prop] = e.currentTarget.value}></Input>
        </div>
    );
};
