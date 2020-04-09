import React, {useState} from 'react';
import Hotkeys from './hotkeys-engine';
import {KeyMap, KeysEvent, LIST_HANDLER, ParentProps} from './types';
import {find, notEmpty} from "./utils";


export default function HotKeys({keyMaps, children}: ParentProps) {

    const [currentKeyMap, setCurrentKeyMap] = useState<KeyMap | null>(null);
    const [currentTimeStamp, setCurrentTimeStamp] = useState<string>('');
    const [showHotKeysList, setShowHotKeysList] = useState(false);

    const keys = notEmpty(keyMaps) ?
        keyMaps.filter(keyMap => keyMap.enabled)
            .map((keyMap) => keyMap.key)
            .reduce((previous, current) => `${previous},${current}`)
        : null;

    return (
        keys ?
            <div>
                <Hotkeys keyName={keys} onKeyDown={onKeyDown} onKeyUp={onKeyUp}/>
                {
                    children && children({
                        list: {
                            display: showHotKeysList,
                            keyMaps: keyMaps
                        },
                        snapshot: {
                            timestamp: currentTimeStamp,
                            key: currentKeyMap?.key,
                            description: currentKeyMap?.description,
                            enabled: currentKeyMap?.enabled
                        }
                    })
                }
            </div>
            :
            <></>
    );

    function onKeyUp(keyName: string, e: any) {
        const currentKey = find(keyMaps, 'key', keyName);
        if (currentKey && currentKey.event === KeysEvent.onUp) {
            doHandleEvent(currentKey, e.timeStamp)
        }
    }

    function onKeyDown(keyName: string, e: any) {
        const currentKey = find(keyMaps, 'key', keyName);
        if (currentKey && currentKey.event === KeysEvent.onDown) {
            doHandleEvent(currentKey, e.timeStamp)
        }
    }

    function doHandleEvent(currentKey: KeyMap, timeStamp: string) {
        if (currentKey.display) {
            setCurrentKeyMap(currentKey);
            setCurrentTimeStamp(timeStamp);
        }
        if (currentKey.handler === LIST_HANDLER) {
            listHandler();
        } else {
            currentKey.handler();
        }
    }

    function listHandler() {
        setShowHotKeysList(!showHotKeysList);
    }
}


