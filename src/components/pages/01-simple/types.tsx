import { proxy } from "valtio";

export type TestData = {
    key: number;
    rootInfo: string;
    level1: {
        level1Info: string;
        level2: {
            level2Info: string;
        };
    };
};

export const createNewData = (idx: number) => ({
    key: idx,
    rootInfo: "bla bla",
    level1: {
        level1Info: "bla blu",
        level2: {
            level2Info: "bla blo"
        }
    }
});

export const root = proxy<TestData>(createNewData(9));

export type TestDataWithArray = {
    objects: TestData[];
};

const arrayData = {
    objects: [
        createNewData(0),
        createNewData(1),
    ]
};

function copyObject<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export const rootArray = proxy(copyObject(arrayData));
export const rootArray2 = proxy(copyObject(arrayData));
export const rootArrayw1 = proxy(copyObject(arrayData));
export const rootArrayw2 = proxy(copyObject(arrayData));
export const rootArrayWrapped = proxy(copyObject(arrayData));
