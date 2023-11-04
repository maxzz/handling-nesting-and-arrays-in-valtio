import { HTMLAttributes } from 'react';
import { classNames } from '@/utils';

export function App2_Main({ className }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("min-h-0 text-foreground bg-background", className)}>

        </div>
    );
}
