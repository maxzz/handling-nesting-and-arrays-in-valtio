import { useSnapshot } from "valtio";
import { useRenderCounter } from "../../utils";
import { TextData } from "../../proxies";
import { Input, PartIntro, gridChild, gridParent, groupFrameClasses } from "../../ui";
import { classNames } from "@/utils";

const Level1 = ({ data }: { data: TextData["level1"]; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <>
            <Input
                label={`Level1`}
                updateCnt={cnt}
                className={gridChild}
                value={snap.level1Info}
                onChange={(e) => data.level1Info = e.currentTarget.value}
            />

            <Level2 data={data.level2} />
        </>
    );
};

const Level2 = ({ data }: { data: TextData["level1"]["level2"]; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <>
            <Input
                label={`Level2`}
                updateCnt={cnt}
                className={gridChild}
                value={snap.level2Info}
                onChange={(e) => data.level2Info = e.currentTarget.value}
            />
        </>
    );
};

export function IntroSimple() {
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

export const Root = ({ data }: { data: TextData; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (<>
        <div className={classNames(groupFrameClasses, gridParent)}>
            <Input
                label={`Root`}
                updateCnt={cnt}
                className={gridChild}
                value={snap.rootInfo}
                onChange={(e) => data.rootInfo = e.currentTarget.value}
            />

            <Level1 data={data.level1} />
        </div>
    </>);
};
