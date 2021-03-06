import React from 'react';
import * as PropTypes from 'prop-types';
import { HotkeysEvent } from 'hotkeys-js';
export declare type OnKeyFun = (shortcut: string, evn: KeyboardEvent, handle: HotkeysEvent) => void;
export interface IReactHotkeysProps {
    keyName?: string;
    filter?: (event: KeyboardEvent) => boolean;
    onKeyUp?: OnKeyFun;
    onKeyDown?: OnKeyFun;
    allowRepeat?: boolean;
    disabled?: boolean;
    splitKey?: string;
}
export default class HotkeysEngine extends React.Component<IReactHotkeysProps> {
    static defaultProps: IReactHotkeysProps;
    static propTypes: {
        keyName: PropTypes.Requireable<string>;
        filter: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyUp: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        splitKey: PropTypes.Requireable<string>;
    };
    private isKeyDown;
    private handle;
    constructor(props: IReactHotkeysProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onKeyUp(e: KeyboardEvent, handle: HotkeysEvent): void;
    onKeyDown(e: KeyboardEvent, handle: HotkeysEvent): void;
    handleKeyUpEvent(e: KeyboardEvent): void;
    render(): {} | null;
}
