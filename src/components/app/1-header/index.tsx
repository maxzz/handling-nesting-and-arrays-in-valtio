import { HTMLAttributes } from "react";

export function App1_Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="mt-4 md:mt-0 flex flex-col">
            Header
        </div>
    );
}
