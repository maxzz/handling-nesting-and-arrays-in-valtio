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

export const rootArray = proxy<TestDataWithArray>(JSON.parse(JSON.stringify(arrayData)));
export const rootArray2 = proxy<TestDataWithArray>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayw1 = proxy<TestDataWithArray>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayw2 = proxy<TestDataWithArray>(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayWrapped = proxy<TestDataWithArray>(JSON.parse(JSON.stringify(arrayData)));
