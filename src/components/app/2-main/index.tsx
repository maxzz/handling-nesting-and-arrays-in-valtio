import { HTMLAttributes } from 'react';
import { Introduction } from '@/components/pages';
import { IntroSimple, Root, RootIntro, RootArrayWrong1, RootArrayWrong2, RootArray, RootArray2, RootArrayWrapped } from '@/components/pages/01-simple';
import { ComplexObject, complexData1, ComplexObjectWithWrappedInput, complexData2 } from '@/components/pages/02-complex';
import { root, rootArrayw1, rootArrayw2, rootArray, rootArray2, rootArrayWrapped } from '@/components/pages/01-simple/types';
import { classNames } from '@/utils';

export function App2_Main({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("px-4 mb-12", className)} {...rest}>
            <Introduction />

            <IntroSimple />
            <Root data={root} />

            <RootIntro />
            <RootArrayWrong1 data={rootArrayw1} />

            <RootArrayWrong2 data={rootArrayw2} />

            <RootArray data={rootArray} />

            <RootArray2 data={rootArray2} />

            <ComplexObject data={complexData1} />

            <ComplexObjectWithWrappedInput data={complexData2} />

            <RootArrayWrapped data={rootArrayWrapped} />
        </div>
    );
}
