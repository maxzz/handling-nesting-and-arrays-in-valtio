import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";

export const WrappedInput = ({ data, prop }: { data: Record<string, string | object>; prop: string; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);

    const value = s[prop];
    if (typeof value !== 'string') {
        throw new Error('This component should only be used for objects');
    }

    return (
        <>
            <span>({cnt})</span>
            <input value={value} onChange={(e) => data[prop] = e.currentTarget.value} />
        </>
    );
};
