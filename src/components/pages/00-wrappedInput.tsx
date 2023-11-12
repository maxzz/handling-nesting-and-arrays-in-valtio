import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";

export const WrappedInput = ({ data, prop }: { data: Record<string, string>; prop: string; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <span>({cnt})</span>
            <input
                value={s[prop]}
                onChange={(e) => {
                    data[prop] = e.currentTarget.value;
                }}
            />
        </>
    );
};
