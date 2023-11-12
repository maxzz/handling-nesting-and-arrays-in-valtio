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

export const rootArray = proxy(JSON.parse(JSON.stringify(arrayData)));
export const rootArray2 = proxy(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayw1 = proxy(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayw2 = proxy(JSON.parse(JSON.stringify(arrayData)));
export const rootArrayWrapped = proxy(JSON.parse(JSON.stringify(arrayData)));
