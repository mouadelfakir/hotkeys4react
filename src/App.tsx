import React from 'react';
import HotKeysContext from './keys4react/lib/hotkeys-context';
import useKeys4react from "./keys4react/lib/hotkeys-hook";
import {KeysEvent, LIST_HANDLER} from "./keys4react/lib/types";
import HotKeys from "./keys4react/lib/hotkeys";
import HotKeysList from "./keys4react/lib/option/hotkeys-list";
import HotKeysDisplay from "./keys4react/lib/option/hotKeys-display";

function App() {

    return (
        <HotKeysContext.Provider value={{keyMaps: []}}>
            <Page/>
        </HotKeysContext.Provider>
    );
}

export default App;

function Page() {
    useKeys4react({
        key: 'alt+a',
        description: 'handle alt+a',
        display: true,
        enabled: true,
        event: KeysEvent.onDown,
        handler: () => console.log('onDown alt+a')
    });

    useKeys4react({
        key: 'alt+z',
        description: 'handle alt+z',
        display: false,
        enabled: true,
        event: KeysEvent.onUp,
        handler: () => console.log('onUp alt+z')
    });

    useKeys4react({
        key: 'alt+e',
        description: 'Show belmahi !',
        display: true,
        enabled: true,
        event: KeysEvent.onUp,
        handler: () => console.log('Show belmahi !')
    });

    useKeys4react({
        key: 'alt+l',
        description: 'Show/hide list',
        display: true,
        enabled: true,
        event: KeysEvent.onDown,
        handler: LIST_HANDLER
    });

    return (
        <div className="container">
            <HotKeysContext.Consumer>
                {
                    ({keyMaps}) => (
                        <HotKeys keyMaps={keyMaps}>
                            {(props) => (
                                <>
                                    <HotKeysList list={props.list}/>
                                    <HotKeysDisplay snapshot={props.snapshot}/>
                                </>
                            )}
                        </HotKeys>
                    )
                }
            </HotKeysContext.Consumer>
        </div>
    );
}

