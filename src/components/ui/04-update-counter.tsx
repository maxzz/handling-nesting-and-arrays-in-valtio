import React, { useEffect } from "react";

export const useRenderCounter = () => {
    const counter = React.useRef(1);
    useEffect(() => {
        counter.current++;
    });
    //counter.current++;
    return counter.current;
};
// export const useRenderCounter = () => {
//     const counter = React.useRef(0);
//     counter.current++;
//     return counter.current;
// };
