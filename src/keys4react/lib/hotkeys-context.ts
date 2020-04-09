import * as React from "react";
import {KeyMap} from "./types";

type HotKeysContext = {
    keyMaps: KeyMap[]
}

export default React.createContext<HotKeysContext>({
    keyMaps: []
});

