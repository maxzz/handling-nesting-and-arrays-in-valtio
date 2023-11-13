import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { Root } from "./01-root";
import { ArrayData } from "../proxies";
import { WrappedInput } from "../ui/03-wrapped-input";
import { ComplexData } from "./06-ComplexObject";
import { PartIntro } from "../ui";

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
    return (<>
        <Intro />

        <h3>(07) Complex objects with wrapped inputs ({cnt})</h3>

        <div>
            <WrappedInput label="field1" data={data} prop="field1" />
            <WrappedInput label="field2" data={data} prop="field2" />
        </div>
    </>);
};
