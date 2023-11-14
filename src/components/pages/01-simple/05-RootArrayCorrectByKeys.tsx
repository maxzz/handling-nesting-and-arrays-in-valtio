import { useSnapshot } from "valtio";
import { TestDataWithArray, createNewData } from "./types";
import { Root } from "./01-RootCommon";
import { Button, PartIntro, Section, UpdateCounterLabel } from "../../ui";
import { useRenderCounter } from "../../ui/04-update-counter";

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

export const RootArrayCorrectByKeys = ({ data }: { data: TestDataWithArray; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <Section>
            <Intro />

            <UpdateCounterLabel label="Array renders" updateCnt={cnt} />

            {snap.objects.map((item, idx) => (
                <Root
                    data={data.objects[idx]}
                    key={item.key}
                />
            ))}

            <Button onClick={() => data.objects.push(createNewData(data.objects.length))}>
                Add
            </Button>
        </Section>
    );
};
