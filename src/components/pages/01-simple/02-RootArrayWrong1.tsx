import { Button, PartIntro, Section } from "../../ui";
import { TestDataWithArray, createNewData } from "./types";
import { Root } from "./01-root";
import { useRenderCounter } from "../../utils";

export function RootIntro() {
    return (
        <PartIntro section="Arrays">
            <p>
                (02) At first glance arrays are just another form of nesting where the object
                properties are indices instead of keys. However the main issue is that
                we don't know how many children the array has at any point in time{" "}
                <b>and</b> we want to be reactive to changes in the array
                (adding/removing elements)
            </p>
        </PartIntro>
    );
}

function Intro() {
    return (
        <PartIntro section="Wrong 1 - render is efficient but not responsive to the ADD button" h1={false}>
            {/* <h2></h2> */}
            <p>
                (02.1) In this example we will use the "proxy" to map the objects into the
                sub-components this is the "natural" way to do it but it bears a problem
                that since we haven't used any snapshot, we are not reactive to changes
                in the number of elements in the array. For this reason the "Add" button
                would appear to make no difference
            </p>
        </PartIntro>
    );
}

export const RootArrayWrong1 = ({ data }: { data: TestDataWithArray; }) => {
    const cnt = useRenderCounter();
    return (
        <Section>
            <Intro />

            <h2>Array ({cnt})</h2>

            {data.objects.map((o) => (
                <Root data={o} key={o.key} />
            ))}

            <Button onClick={() => data.objects.push(createNewData(data.objects.length))}>
                Add
            </Button>
        </Section>
    );
};
