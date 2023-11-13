import { useSnapshot } from "valtio";
import { Button, PartIntro } from "../ui";
import { useRenderCounter } from "../utils";
import { Root } from "./01-root";
import { ArrayData } from "../proxies";

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

const addNew = (idx: number) => ({
    key: idx,
    rootInfo: "bla bla",
    level1: {
        level1Info: "bla blu",
        level2: {
            level2Info: "bla blo"
        }
    }
});

export const RootArray = ({ data }: { data: ArrayData; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <>
            <Intro />

            <h2>Array ({cnt})</h2>

            {Array.from(Array(snap.objects.length).keys()).map((i) => (
                <Root data={data.objects[i]} key={snap.objects[i].key} />
            ))}

            <Button onClick={() => data.objects.push(addNew(data.objects.length))}>
                Add
            </Button>
        </>
    );
};
