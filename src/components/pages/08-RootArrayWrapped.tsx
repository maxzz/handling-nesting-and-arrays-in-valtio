import { proxy, useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { Root } from "./01-root";
import { ArrayData } from "../proxies";
import { WrappedInput } from "./00-wrappedInput";

const rootWrapped = proxy({
    rootInfo: "bla bla",
    level1: {
        level1Info: "bla blu",
        level2: {
            level2Info: "bla blo"
        }
    }
});

export type RootWrapped = typeof rootWrapped;

const Level1Wrapped = ({ data }: { data: RootWrapped["level1"]; }) => {
    const cnt = useRenderCounter();
    return (
        <>
            <label>Level1 ({cnt}) </label>
            <WrappedInput data={data} prop="level1Info" />
            <Level2Wrapped data={data.level2} />
        </>
    );
};

const Level2Wrapped = ({ data }: { data: RootWrapped["level1"]["level2"]; }) => {
    const cnt = useRenderCounter();
    return (
        <>
            <label>Level2 ({cnt}) </label>
            <WrappedInput data={data} prop="level2Info" />
        </>
    );
};

const RootWrapped = ({ data }: { data: RootWrapped; }) => {
    const cnt = useRenderCounter();
    return (
        <div>
            <label>Root ({cnt}) </label>
            <WrappedInput data={data} prop="rootInfo" />
            <Level1Wrapped data={data.level1} />
        </div>
    );
};

function Intro() {
    return (<>
        <h1>Revisiting "Simple" objects</h1>
        <p>
            Going back to our "simple" objects in the top of this page, we can now
            use the WrappedInput to make sure that even changes to the primitive
            field at the higher level isn't causing a re-render of the lower level,
            this combining this wrapped input method with what we did to optimize
            array rendering:
        </p>
    </>);
}

export const RootArrayWrapped = ({ data }: { data: ArrayData; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <Intro />

            <h2>Array ({cnt})</h2>
            {s.objects.map((o, i) => (
                <RootWrapped data={data.objects[i]} key={o.key} />
            ))}
            <button
                onClick={() => {
                    data.objects.push({
                        key: data.objects.length,
                        rootInfo: "bla bla",
                        level1: {
                            level1Info: "bla blu",
                            level2: {
                                level2Info: "bla blo"
                            }
                        }
                    });
                }}
            >
                Add
            </button>
        </>
    );
};
