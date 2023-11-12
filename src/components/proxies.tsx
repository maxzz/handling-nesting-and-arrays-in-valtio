import { proxy, useSnapshot } from "valtio";

export const root = proxy({
    rootInfo: "bla bla",
    level1: {
        level1Info: "bla blu",
        level2: {
            level2Info: "bla blo"
        }
    }
});

const arrayData = {
    objects: [
        {
            key: 0,
            rootInfo: "bla bla",
            level1: {
                level1Info: "bla blu",
                level2: {
                    level2Info: "bla blo"
                }
            }
        },
        {
            key: 1,
            rootInfo: "bla bla",
            level1: {
                level1Info: "bla blu",
                level2: {
                    level2Info: "bla blo"
                }
            }
        }
    ]
};

export type ArrayData = typeof arrayData;

export const rootArray = proxy<ArrayData>(JSON.parse(JSON.stringify(arrayData)));
export const rootArray2 = proxy<ArrayData>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayw1 = proxy<ArrayData>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayw2 = proxy<ArrayData>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayWrapped = proxy<ArrayData>(JSON.parse(JSON.stringify(arrayData)));
