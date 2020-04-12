/// <reference types="react" />
import HotKeys from "./lib/hotkeys";
import useKeys4react from "./lib/hotkeys-hook";
import { KeysEvent } from "./lib/types";
import HotKeysList from "./lib/option/hotkeys-list";
import HotKeysDisplay from "./lib/option/hotKeys-display";
declare const _default: {
    HotKeys: typeof HotKeys;
    HotKeysContext: import("react").Context<{
        keyMaps: import("./lib/types").KeyMap[];
    }>;
    useKeys4react: typeof useKeys4react;
    KeysEvent: typeof KeysEvent;
    LIST_HANDLER: number;
    HotKeysList: typeof HotKeysList;
    HotKeysDisplay: typeof HotKeysDisplay;
};
export default _default;
