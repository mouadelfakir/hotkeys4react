import * as React from "react";
import { KeyMap } from "./types";
declare type HotKeysContextType = {
    keyMaps: KeyMap[];
};
declare const HotKeysContext: React.Context<HotKeysContextType>;
export default HotKeysContext;
