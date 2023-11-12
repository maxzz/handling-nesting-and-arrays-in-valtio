import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { ArrayData } from "../proxies";
import { Root } from "./01-root";

function Intro() {
    return (<>
        <h2> Wrong 2 - responsive but renders everything on every change </h2>
        <p>
            Option 2 is to map on the objects in the snapshot and pass the
            appropiate proxy to the child container (via the index). This also looks
            "nice" from a JS perspective but it causes a problem that now any change
            to any objects makes the entire component tree to render.
        </p>
    </>);
}

export const RootArrayWrong2 = ({ data }: { data: ArrayData; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <Intro />

            <h2>Array ({cnt})</h2>
            {s.objects.map((o, i) => (
                <Root data={data.objects[i]} key={i} />
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

