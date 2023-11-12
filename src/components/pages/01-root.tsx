import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { RootData } from "../proxies";

const Level1 = ({ data }: {data: RootData["level1"]}) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <label>Level1 ({cnt}) </label>
            <input
                value={s.level1Info}
                onChange={(e) => {
                    data.level1Info = e.currentTarget.value;
                }}
            />
            <Level2 data={data.level2} />
        </>
    );
};

const Level2 = ({ data }: {data: RootData["level1"]["level2"]}) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <label>Level2 ({cnt}) </label>
            <input
                value={s.level2Info}
                onChange={(e) => {
                    data.level2Info = e.currentTarget.value;
                }}
            />
        </>
    );
};

export const Root = ({ data }: {data: RootData}) => {
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
