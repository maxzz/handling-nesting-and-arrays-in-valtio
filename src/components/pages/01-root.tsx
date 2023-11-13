import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { RootData } from "../proxies";
import { PartIntro } from "../ui";

const Level1 = ({ data }: { data: RootData["level1"]; }) => {
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

const Level2 = ({ data }: { data: RootData["level1"]["level2"]; }) => {
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

function Intro() {
    return (
        <PartIntro section="Simple nested objects">
            <p>
                First case to look at is are "simple" (i.e. no arrays) nested
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
        <Intro />

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
    </>);
};
