import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { Input } from "./02-input";
import { useRenderCounter } from "../utils";

type WrappedInputProps = {
    label: string;
    data: Record<string, string | number | object>;
    prop: string;
    updateCnt?: number;
} & HTMLAttributes<HTMLDivElement>;

export const WrappedInput = ({ label, data, prop, ...rest }: WrappedInputProps) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);

    const value = s[prop];
    if (typeof value !== 'string') {
        throw new Error('This component should only be used for objects');
    }

    return (
        <Input
            label={`${label}.${prop}`}
            updateCnt={cnt}
            value={value}
            onChange={(e) => data[prop] = e.currentTarget.value}
            {...rest}
        />
    );
};
