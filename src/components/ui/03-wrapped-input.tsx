import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { Input } from "./02-input";
import { useRenderCounter } from "./04-update-counter";

type WrappedInputProps = {
    label: string;
    data: Record<string, string | number | object>;
    fieldName: string;
    updateCnt?: number;
} & HTMLAttributes<HTMLDivElement>;

export const WrappedInput = ({ label, data, fieldName, ...rest }: WrappedInputProps) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);

    const value = snap[fieldName];
    if (typeof value !== 'string') {
        throw new Error('This component should only be used for objects');
    }

    return (
        <Input
            label={`${label}.${fieldName}`}
            updateCnt={cnt}
            value={value}
            onChange={(e) => data[fieldName] = e.currentTarget.value}
            {...rest}
        />
    );
};
