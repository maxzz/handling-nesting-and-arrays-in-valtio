import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { RootData } from "../proxies";
import { Input, PartIntro, gridChild, gridParent } from "../ui";
import { classNames } from "@/utils";

const Level1 = ({ data }: { data: RootData["level1"]; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <Input
                label={`Level1`}
                updateCnt={cnt}
                className={gridChild}
                value={s.level1Info}
                onChange={(e) => data.level1Info = e.currentTarget.value}
            />

            <Level2 data={data.level2} />
        </>
    );
};

const Level2 = ({ data }: { data: RootData["level1"]["level2"]; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <Input
                label={`Level2`}
                updateCnt={cnt}
                className={gridChild}
                value={s.level2Info}
                onChange={(e) => data.level2Info = e.currentTarget.value}
            />
        </>
    );
};

export function RootIntro() {
    return (
        <PartIntro section="Simple nested objects">
            <p>
                (01) First case to look at is are "simple" (i.e. no arrays) nested
                objects/components. We can see that in this case the rendering only
                happens to the objects that changed and whatever components are under
                them. To make it work we need to pass the <b>proxy</b> to the child
                component and not depend on it.
            </p>
        </PartIntro>
    );
}

export const Root = ({ data }: { data: RootData; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (<>
        <div className={classNames("my-1 px-4 py-1 w-min border-primary-500 border border-dotted rounded", gridParent)}>
            <Input
                label={`Root`}
                updateCnt={cnt}
                className={gridChild}
                value={s.rootInfo}
                onChange={(e) => data.rootInfo = e.currentTarget.value}
            />

            <Level1 data={data.level1} />
        </div>
    </>);
};
