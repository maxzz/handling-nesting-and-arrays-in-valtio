import { PartIntro } from "../ui";

export function Introduction() { //https://codesandbox.io/s/handling-nesting-and-arrays-in-valtio-hoe3j4?file=/src/App.js
    return (
        <PartIntro section="Introduction">
            <p>
                (00) This page shows different ways to render nested or complex objects that
                correcpond to nested React component. This is a common use case where
                the data is can be a large nested tree that we want to match with a
                component tree such that each component allows editing that specific
                part of the tree.
            </p>
            <p>
                These examples show how to do that with Valtio while keeping 2
                invariants:
            </p>
            <ul>
                <li>All the changes are reactive</li>
                <li>
                    We only render what we must render (i.e. from the component that
                    changed downwards)
                </li>
            </ul>
            <p>
                This can be sometimes tricky to achieve because 2 "reasonable" behaviors
                in Valtio that make sense individually, do cause issues quite often when
                mixed together:
            </p>
            <ul>
                <li>
                    Valtio only re-renders when the "accessed" object properties are
                    changed, however if <b>no properties</b> are accessed, it will
                    re-render based on <b>referential equality</b> of the object
                </li>
                <li>
                    When an object property is modified in Valtio, the object version
                    changes all the way up, meaning that the object equality of the entire
                    parental branch will be <b>false</b>. this is what gives real
                    immutability to the snapshots
                </li>
            </ul>
            <p>
                Both these make total sense, but combined together it means that if at
                any level in the component tree, a component relies on an object without
                specific property, it is destined to re-render itself and all it's
                children recursively for <b>any change</b> in said object or{" "}
                <b>any of its children recursively</b>
            </p>
            <p>
                Note: In this page, wherever you see a number in paranthesis, it is
                representing the number of renders that component had
            </p>
        </PartIntro>
    );
}
