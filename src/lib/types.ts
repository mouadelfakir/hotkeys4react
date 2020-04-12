export interface KeyMap {
    key: string;
    display: boolean;
    enabled: boolean;
    description?: string;
    event: KeysEvent;
    handler: any;
}

export enum KeysEvent {
    onDown, onUp
}

export const LIST_HANDLER = 1;


export interface ChildProps {
    list: {
        display: boolean;
        keyMaps: KeyMap[];
    }
    snapshot: {
        timestamp?: string;
        key?: string;
        description?: string;
        enabled?: boolean;
    }
}

export interface ParentProps {
    keyMaps: KeyMap[];
    children?(props: ChildProps): JSX.Element;
}
