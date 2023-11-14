import { useSnapshot } from "valtio";
import { TestDataWithArray, createNewData } from "./types";
import { Root } from "./01-RootCommon";
import { Button, PartIntro, Section } from "../../ui";
import { useRenderCounter } from "../../ui/04-update-counter";

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

export const RootArrayCorrectByLength = ({ data }: { data: TestDataWithArray; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <Section>
            <Intro />

            <h2>Array ({cnt})</h2>

            {
                Array.from(
                    Array(snap.objects.length).keys()
                ).map((idx) => (
                    <Root
                        data={data.objects[idx]}
                        key={snap.objects[idx].key}
                    />
                ))}

            <Button onClick={() => data.objects.push(createNewData(data.objects.length))}>
                Add
            </Button>
        </Section>
    );
};
