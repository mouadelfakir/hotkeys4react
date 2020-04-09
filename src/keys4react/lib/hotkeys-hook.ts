import {useContext} from "react";
import {KeyMap} from "./types";
import HotKeysContext from "./hotkeys-context";
import {findIndex} from "./utils";


export default function useKeys4react({key, event, display, enabled, description, handler}: KeyMap) {
    const {keyMaps} = useContext(HotKeysContext);
    const index = findIndex(keyMaps, 'key', key);
    if (index < 0) {
        keyMaps.push({key, event, display, enabled, description, handler});
    } else {
        keyMaps[index] = {key, event, display, enabled, description, handler}
    }
}
