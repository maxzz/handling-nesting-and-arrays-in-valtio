import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { Root } from "./01-root";
import { ArrayData } from "../proxies";
import { PartIntro } from "../ui";

function Intro() {
    return (
        <PartIntro section="Correct 1 - Using only the length from the snapshot" h1={false}>
            {/* <h2>  </h2> */}
            <p>
                (04) If we just depend on the length from the snapshot we will be reactive on
                changes in the array size, without depending on the objects
                individually.
            </p>
        </PartIntro>
    );
}

export const RootArray = ({ data }: { data: ArrayData; }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <Intro />

            <h2>Array ({cnt})</h2>

            {Array.from(Array(s.objects.length).keys()).map((i) => (
                <Root data={data.objects[i]} key={s.objects[i].key} />
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
