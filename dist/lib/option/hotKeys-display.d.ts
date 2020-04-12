/// <reference types="react" />
declare type Props = {
    snapshot: {
        timestamp?: string;
        key?: string;
        description?: string;
        enabled?: boolean;
    };
};
export default function HotKeysDisplay({ snapshot }: Props): JSX.Element;
export {};
