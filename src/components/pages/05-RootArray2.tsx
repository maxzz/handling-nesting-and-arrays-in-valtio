import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { Root } from "./01-root";
import { TextDataArray } from "../proxies";
import { Button, PartIntro, Section } from "../ui";

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

export const RootArray2 = ({ data }: { data: TextDataArray; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <Section>
            <Intro />

            <h2>Array ({cnt})</h2>

            {snap.objects.map((o, i) => (
                <Root data={data.objects[i]} key={o.key} />
            ))}

            <Button onClick={() => data.objects.push(addNew(data.objects.length))}>
                Add
            </Button>
        </Section>
    );
};
