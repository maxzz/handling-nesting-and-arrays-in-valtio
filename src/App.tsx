//https://codesandbox.io/s/handling-nesting-and-arrays-in-valtio-hoe3j4?file=/src/App.js

import React from "react";
import { proxy, useSnapshot } from "valtio";
import { useRenderCounter } from "./components/utils";
import {
    root,
    rootArray,
    rootArray2,
    rootArrayw1,
    rootArrayw2,
    rootArrayWrapped
} from "./components/proxies";
import { Introduction, Root, RootArrayWrong1 } from "./components/pages";

const RootArrayWrong2 = ({ data }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <h2>Array ({cnt})</h2>
            {s.objects.map((o, i) => (
                <Root data={data.objects[i]} key={i} />
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

const RootArray = ({ data }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
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

const RootArray2 = ({ data }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <h2>Array ({cnt})</h2>
            {s.objects.map((o, i) => (
                <Root data={data.objects[i]} key={o.key} />
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

const WrappedInput = ({ data, prop }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <span>({cnt})</span>
            <input
                value={s[prop]}
                onChange={(e) => {
                    data[prop] = e.currentTarget.value;
                }}
            />
        </>
    );
};

const complexData = {
    field1: "A",
    field2: "B"
};

const complexData1 = proxy(JSON.parse(JSON.stringify(complexData)));
const complexData2 = proxy(JSON.parse(JSON.stringify(complexData)));

const ComplexObject = ({ data }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <div>
            <h2>Complex objects ({cnt})</h2>
            <label>field1</label>
            <input
                value={s.field1}
                onChange={(e) => (data.field1 = e.currentTarget.value)}
            />
            <label>field2</label>
            <input
                value={s.field2}
                onChange={(e) => (data.field2 = e.currentTarget.value)}
            />
        </div>
    );
};

const ComplexObjectWithWrappedInput = ({ data }) => {
    const cnt = useRenderCounter();
    return (
        <div>
            <h2>Complex objects with wrapped inputs ({cnt})</h2>
            <label>field1</label>
            <WrappedInput data={data} prop="field1" />
            <label>field2</label>
            <WrappedInput data={data} prop="field2" />
        </div>
    );
};

const rootWrapped = proxy({
    rootInfo: "bla bla",
    level1: {
        level1Info: "bla blu",
        level2: {
            level2Info: "bla blo"
        }
    }
});

const RootWrapped = ({ data }) => {
    const cnt = useRenderCounter();
    return (
        <div>
            <label>Root ({cnt}) </label>
            <WrappedInput data={data} prop="rootInfo" />
            <Level1Wrapped data={data.level1} />
        </div>
    );
};

const Level1Wrapped = ({ data }) => {
    const cnt = useRenderCounter();
    return (
        <>
            <label>Level1 ({cnt}) </label>
            <WrappedInput data={data} prop="level1Info" />
            <Level2Wrapped data={data.level2} />
        </>
    );
};

const Level2Wrapped = ({ data }) => {
    const cnt = useRenderCounter();
    return (
        <>
            <label>Level2 ({cnt}) </label>
            <WrappedInput data={data} prop="level2Info" />
        </>
    );
};

const RootArrayWrapped = ({ data }) => {
    const cnt = useRenderCounter();
    const s = useSnapshot(data);
    return (
        <>
            <h2>Array ({cnt})</h2>
            {s.objects.map((o, i) => (
                <RootWrapped data={data.objects[i]} key={o.key} />
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

export default function App() {
    // let t = useSnapshot(state.people[0]);
    return (
        <>
            <Introduction />
            <Root data={root} />
            <RootArrayWrong1 data={rootArrayw1} />
            <h2> Wrong 2 - responsive but renders everything on every change </h2>
            <p>
                Option 2 is to map on the objects in the snapshot and pass the
                appropiate proxy to the child container (via the index). This also looks
                "nice" from a JS perspective but it causes a problem that now any change
                to any objects makes the entire component tree to render.
            </p>
            <RootArrayWrong2 data={rootArrayw2} />
            <h2> Correct 1 - Using only the length from the snapshot </h2>
            <p>
                If we just depend on the length from the snapshot we will be reactive on
                changes in the array size, without depending on the objects
                individually.
            </p>
            <RootArray data={rootArray} />
            <h2> Correct 2 - Using a key from the objects </h2>
            <p>
                React recommends using "key" props for elements in array so it can be
                more efficient when elements are moved around. This can also help
                Valtio, if we pass the "key" from the objects themselves (assuming such
                key exists). This will cause the array component not to rely on the
                objects themselves (with referential equality) but rather on the key
                inside each object only. Since these "keys" never (or rarely) change
                then it will prevent the array component (and all its children) to
                redner unneededly
            </p>
            <RootArray2 data={rootArray2} />
            <h1> Complex objects (multiple editable elements) </h1>
            <p>
                So far we handled only objects with 1 primitive field and one nested
                objects. yet even in that example we see that updating the primitive
                field renders the child component that is a sibling to it. In cases
                where we might have many different fields at the same object this could
                be detrimental to performance.
            </p>
            <h2> Simple inputs (cause more rendering to complex object) </h2>
            <p>
                This example shows how a component with 2 primitive fields will render
                itself for any change in any one of these fields:
            </p>
            <ComplexObject data={complexData1} />

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
            <ComplexObjectWithWrappedInput data={complexData2} />
            <h1>Revisiting "Simple" objects</h1>
            <p>
                Going back to our "simple" objects in the top of this page, we can now
                use the WrappedInput to make sure that even changes to the primitive
                field at the higher level isn't causing a re-render of the lower level,
                this combining this wrapped input method with what we did to optimize
                array rendering:
            </p>
            <RootArrayWrapped data={rootArrayWrapped} />
        </>
    );
}
