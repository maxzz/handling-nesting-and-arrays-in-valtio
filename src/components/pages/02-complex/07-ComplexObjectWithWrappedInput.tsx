import { useRenderCounter } from "../../ui/04-update-counter";
import { WrappedInput } from "../../ui/03-wrapped-input";
import { ComplexData } from "./06-ComplexObject";
import { PartIntro, Section, UpdateCounterLabel, gridChild, gridParent } from "../../ui";

function Intro() {
    return (
        <PartIntro section="Wrapped inputs avoid sideways rendering" h1={false}>
            {/* <h2>  </h2> */}
            <p>
                (07) The behavior presented above shouldn't be surprising as this is what
                React is supposed to do, it can't "half-render" a component when only
                some of it changes. However, there is a solution, if we push down the
                dependency to a wrapper component that wraps around a single field. We
                can see that in this case the top level component never renders on
                change and only the individual wrappers around the input elements that
                changed are rendered
            </p>

        </PartIntro>
    );
}

export const ComplexObjectWithWrappedInput = ({ data }: { data: ComplexData; }) => {
    const cnt = useRenderCounter();
    return (
        <Section>
            <Intro />

            <UpdateCounterLabel label="Complex object with wrapped inputs renders" updateCnt={cnt} />

            <div className={gridParent}>
                <WrappedInput
                    label="field1"
                    className={gridChild}
                    data={data}
                    fieldName="field1"
                />

                <WrappedInput
                    label="field2"
                    className={gridChild}
                    data={data}
                    fieldName="field2"
                />
            </div>
        </Section>
    );
};
