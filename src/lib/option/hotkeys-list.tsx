import * as React from "react";
import { KeyMap } from "../types";

interface Props {
    list: {
        display: boolean;
        keyMaps: KeyMap[];
    }
}

export default function HotKeysList({ list }: Props) {

    return (
        list?.keyMaps && list.display ?
            <div className="list-container">
                <div className="list-body">
                    {
                        list.keyMaps.map((keyMap) => (
                            <div className="list-entry" key={keyMap.key}>
                                <div className="list-key">{keyMap.key}</div>
                                <div className="list-description">{keyMap.description}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            :
            <div></div>
    );
}
