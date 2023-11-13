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

export type TextData = typeof root;
//export type TestData = typeof root;

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

export type TextDataArray = typeof arrayData;

/*
export type TextDataArray = {
    objects: TestData[];
};
*/

export const rootArray = proxy<TextDataArray>(JSON.parse(JSON.stringify(arrayData)));
export const rootArray2 = proxy<TextDataArray>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayw1 = proxy<TextDataArray>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayw2 = proxy<TextDataArray>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayWrapped = proxy<TextDataArray>(JSON.parse(JSON.stringify(arrayData)));
