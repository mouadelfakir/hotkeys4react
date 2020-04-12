import * as React from "react";
import { KeyMap } from "./types";

type HotKeysContextType = {
    keyMaps: KeyMap[]
}
const HotKeysContext = React.createContext<HotKeysContextType>({
    keyMaps: []
});
export default HotKeysContext;

