import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { Root } from "./01-root";
import { ArrayData } from "../proxies";
import { PartIntro } from "../ui";

function Intro() {
    return (
        <PartIntro section="Correct 2 - Using a key from the objects" h1={false}>
            {/* <h2>  </h2> */}
            <p>
                (05) React recommends using "key" props for elements in array so it can be
                more efficient when elements are moved around. This can also help
                Valtio, if we pass the "key" from the objects themselves (assuming such
                key exists). This will cause the array component not to rely on the
                objects themselves (with referential equality) but rather on the key
                inside each object only. Since these "keys" never (or rarely) change
                then it will prevent the array component (and all its children) to
                redner unneededly
            </p>
        </PartIntro>
    );
}

export const RootArray2 = ({ data }: { data: ArrayData; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <Intro />

            <h2>Array ({cnt})</h2>

            {s.objects.map((o, i) => (
                <Root data={data.objects[i]} key={o.key} />
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
