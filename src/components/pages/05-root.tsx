import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";

export const Root = ({ data }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <div>
            <label>Root ({cnt}) </label>
            <input
                value={s.rootInfo}
                onChange={(e) => {
                    data.rootInfo = e.currentTarget.value;
                }}
            />
            <Level1 data={data.level1} />
        </div>
    );
};
