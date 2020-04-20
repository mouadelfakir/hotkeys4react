import React, {useEffect} from 'react';
import hotkeys from 'hotkeys-js';
import {KeyMap} from "./types";


export interface Props {
    keyMaps: KeyMap[];
    filter?: (event: KeyboardEvent) => boolean;
    onKeyUp?: any;
    onKeyDown?: any;
    allowRepeat?: boolean;
    disabled?: boolean;
    splitKey?: string;
}

export default function HotkeysEngine({keyMaps, splitKey, allowRepeat, onKeyUp, onKeyDown}:Props) {

    const keys = keyMaps.filter(keyMap => keyMap.enabled)
            .map((keyMap) => keyMap.key)
            .reduce((previous, current) => `${previous},${current}`);

    useEffect(() => {
        let isKeyDown = false;
        hotkeys(keys, { splitKey, keyup: true },  function(event, handler) {
            event.preventDefault();

            if (event.type === 'keydown') {
                if(!allowRepeat && isKeyDown) return;
                isKeyDown = true;
                onKeyDown(handler.key, event);
            }

            if (event.type === 'keyup') {
                isKeyDown = false;
                onKeyUp(handler.key, event)
            }

            return false;
        });
    }, [splitKey, allowRepeat]);

    return <div/>;
}
