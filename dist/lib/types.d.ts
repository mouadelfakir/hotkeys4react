/// <reference types="react" />
export interface KeyMap {
    key: string;
    display: boolean;
    enabled: boolean;
    description?: string;
    event: KeysEvent;
    handler: any;
}
export declare enum KeysEvent {
    onDown = 0,
    onUp = 1
}
export declare const LIST_HANDLER = 1;
export interface ChildProps {
    list: {
        display: boolean;
        keyMaps: KeyMap[];
    };
    snapshot: {
        timestamp?: string;
        key?: string;
        description?: string;
        enabled?: boolean;
    };
}
export interface ParentProps {
    keyMaps: KeyMap[];
    children?(props: ChildProps): JSX.Element;
}
