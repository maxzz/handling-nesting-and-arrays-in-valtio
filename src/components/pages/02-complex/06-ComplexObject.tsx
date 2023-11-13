import { proxy, useSnapshot } from "valtio";
import { useRenderCounter } from "../../utils";
import { Root } from "../01-simple/01-root";
import { TextDataArray } from "../../proxies";
import { Input, PartIntro, Section, gridChild, gridParent } from "../../ui";

function Intro() {
    return (<>
        <PartIntro section="Complex objects (multiple editable elements)">
            <p>
                (06) So far we handled only objects with 1 primitive field and one nested
                objects. yet even in that example we see that updating the primitive
                field renders the child component that is a sibling to it. In cases
                where we might have many different fields at the same object this could
                be detrimental to performance.
            </p>
        </PartIntro>

        <PartIntro section="Simple inputs (cause more rendering to complex object)" h1={false}>
            {/* <h2>  </h2> */}
            <p>
                (06.1) This example shows how a component with 2 primitive fields will render
                itself for any change in any one of these fields:
            </p>
        </PartIntro>
    </>);
}

export const complexData = {
    field1: "A",
    field2: "B"
};

export type ComplexData = typeof complexData;

export const complexData1 = proxy<ComplexData>(JSON.parse(JSON.stringify(complexData)));
export const complexData2 = proxy<ComplexData>(JSON.parse(JSON.stringify(complexData)));

export const ComplexObject = ({ data }: { data: ComplexData; }) => {
    const cnt = useRenderCounter();
    const snap = useSnapshot(data);
    return (
        <Section>
            <Intro />

            <h2>Complex objects ({cnt})</h2>

            <div className={gridParent}>
                <Input
                    label="field1"
                    className={gridChild}
                    value={snap.field1}
                    onChange={(e) => data.field1 = e.currentTarget.value}
                />

                <Input
                    label="field2"
                    className={gridChild}
                    value={snap.field2}
                    onChange={(e) => data.field2 = e.currentTarget.value}
                />
            </div>

        </Section>
    );
};
