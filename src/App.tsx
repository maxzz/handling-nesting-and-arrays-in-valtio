import {
    root,
    rootArray,
    rootArray2,
    rootArrayw1,
    rootArrayw2,
    rootArrayWrapped
} from "./components/proxies";

import { ComplexObject, ComplexObjectWithWrappedInput, Introduction, Root, RootArray, RootArray2, RootArrayWrapped, RootArrayWrong1, RootArrayWrong2, complexData1, complexData2 } from "./components/pages";

export default function App() {
    // let t = useSnapshot(state.people[0]);
    return (
        <div className="px-4">
            <Introduction />

            <Root data={root} />

            <RootArrayWrong1 data={rootArrayw1} />

            <RootArrayWrong2 data={rootArrayw2} />

            <RootArray data={rootArray} />

            <RootArray2 data={rootArray2} />

            <ComplexObject data={complexData1} />

            <ComplexObjectWithWrappedInput data={complexData2} />

            <RootArrayWrapped data={rootArrayWrapped} />
        </div>
    );
}
