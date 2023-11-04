import { HTMLAttributes } from 'react';
import { classNames } from '@/utils';

export function App3_Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("px-2 py-2 text-sm text-muted-foreground bg-background flex items-center justify-between space-x-4", className)} {...rest}>
            Footer
        </div>
    );
}
