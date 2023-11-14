import { HTMLAttributes } from 'react';
import { classNames } from '@/utils';

const counterClasses = "\
min-w-[1.75rem] h-5  text-[.6rem] font-semibold \
text-primary-600 bg-primary-200 border-primary-300 \
border rounded shadow \
flex items-center justify-center";

export function UpdateCounterLabel({ label, updateCnt, className, ...rest }: { label: string; updateCnt: number; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("mt-2 w-max h-6 text-xs text-primary-500 bg-primary-100 rounded flex items-center space-x-1", className)} {...rest}>
            <div className="px-2">{label}</div>
            <div className={counterClasses}>{updateCnt}</div>
        </div>
    );
}
