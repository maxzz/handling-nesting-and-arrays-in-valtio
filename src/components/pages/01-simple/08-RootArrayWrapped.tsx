import { proxy, useSnapshot } from "valtio";
import { TestDataWithArray, createNewData } from "./types";
import { Button, PartIntro, Section, WrappedInput, gridChild, gridParent, groupFrameClasses } from "../../ui";
import { useRenderCounter } from "../../utils";
import { classNames } from "@/utils";

const rootWrapped = proxy(createNewData(0));

type RootWrapped = typeof rootWrapped;

const Level1Wrapped = ({ data }: { data: RootWrapped["level1"]; }) => {
    const cnt = useRenderCounter();
    return (<>
        <WrappedInput
            label={`Level1 (${cnt})`}
            className={gridChild}
            data={data}
            fieldName="level1Info"
        />

        <Level2Wrapped data={data.level2} />
    </>);
};

const Level2Wrapped = ({ data }: { data: RootWrapped["level1"]["level2"]; }) => {
    const cnt = useRenderCounter();
    return (<>
        <WrappedInput
            label={`Level2 (${cnt})`}
            className={gridChild}
            data={data}
            fieldName="level2Info"
        />
    </>);
};

const RootWrapped = ({ data }: { data: RootWrapped; }) => {
    const cnt = useRenderCounter();
    return (
        <div className={classNames(groupFrameClasses, gridParent)}>
            <WrappedInput
                label={`Root (${cnt})`}
                className={gridChild}
                data={data}
                fieldName="rootInfo"
            />

            <Level1Wrapped data={data.level1} />
        </div>
    );
};

function Intro() {
    return (
        <PartIntro section="Revisiting 'Simple' objects">
            <p>
                (08) Going back to our "simple" objects in the top of this page, we can now
                use the WrappedInput to make sure that even changes to the primitive
                field at the higher level isn't causing a re-render of the lower level,
                this combining this wrapped input method with what we did to optimize
                array rendering:
            </p>
        </PartIntro>
    );
}

export const RootArrayWrapped = ({ data }: { data: TestDataWithArray; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <Section>
            <Intro />

            <h2>Array ({cnt})</h2>

            {snap.objects.map((o, idx) => (
                <RootWrapped data={data.objects[idx]} key={o.key} />
            ))}

            <Button onClick={() => data.objects.push(createNewData(data.objects.length))}>
                Add
            </Button>
        </Section>
    );
};
