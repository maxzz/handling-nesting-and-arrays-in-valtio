import React from "react";
import { proxy, useSnapshot } from "valtio";

export const useRenderCounter = (label?: string) => {
    const counter = React.useRef(0);
    counter.current++;
    return counter.current;
};
