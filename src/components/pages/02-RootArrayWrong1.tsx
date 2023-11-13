import { useSnapshot } from "valtio";
import { useRenderCounter } from "../utils";
import { Root } from "./01-root";
import { ArrayData } from "../proxies";
import { PartIntro } from "../ui";

function Intro() {
    return (
        <PartIntro section="Arrays">

            <p>
                (02) At first glance arrays are just another form of nesting where the object
                properties are indices instead of keys. However the main issue is that
                we don't know how many children the array has at any point in time{" "}
                <b>and</b> we want to be reactive to changes in the array
                (adding/removing elements)
            </p>
            <h2>
                Wrong 1 - render is efficient but not responsive to the ADD button
            </h2>
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

export const RootArrayWrong1 = ({ data }: { data: ArrayData; }) => {
    const cnt = useRenderCounter();
    return (
        <>
            <Intro />

            <h2>Array ({cnt})</h2>
            {data.objects.map((o) => (
                <Root data={o} key={o.key} />
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
