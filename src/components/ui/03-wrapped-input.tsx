import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";

const inputClasses = "px-2 py-1 ring-primary-500 ring-1 rounded";

export const WrappedInput = ({ data, prop }: { data: Record<string, string | object>; prop: string; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);

    const value = s[prop];
    if (typeof value !== 'string') {
        throw new Error('This component should only be used for objects');
    }

    return (
        <label className="">
            <span>({cnt})</span>
            <input className={inputClasses} value={value} onChange={(e) => data[prop] = e.currentTarget.value} />
        </label>
    );
};
