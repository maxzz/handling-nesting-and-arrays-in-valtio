import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { Root } from "./01-root";
import { ArrayData } from "../proxies";
import { WrappedInput } from "./00-wrappedInput";
import { ComplexData } from "./06-ComplexObject";

function Intro() {
    return (<>
        <h2> Wrapped inputs avoid sideways rendering </h2>
        <p>
            The behavior presented above shouldn't be surprising as this is what
            React is supposed to do, it can't "half-render" a component when only
            some of it changes. However, there is a solution, if we push down the
            dependency to a wrapper component that wraps around a single field. We
            can see that in this case the top level component never renders on
            change and only the individual wrappers around the input elements that
            changed are rendered
        </p>
    </>);
}

export const ComplexObjectWithWrappedInput = ({ data }: { data: ComplexData; }) => {
    const cnt = useRenderCounter();
    return (<>
        <Intro />

        <div>
            <h2>Complex objects with wrapped inputs ({cnt})</h2>
            <label>field1</label>
            <WrappedInput data={data} prop="field1" />
            <label>field2</label>
            <WrappedInput data={data} prop="field2" />
        </div>
    </>);
};
