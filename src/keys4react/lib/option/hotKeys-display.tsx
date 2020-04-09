import * as React from "react";

type Props = {
    snapshot : {
        timestamp?: string,
        key?: string,
        description?: string,
        enabled?: boolean
    }
}

export default function HotKeysDisplay({snapshot}: Props) {

    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        snapshot.key && setShow(true);
        const timer = setTimeout(() => {
            setShow(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [snapshot.key, snapshot.timestamp]);

    return (
        show ?
            <div className="card-container">
                <div className="card-body">
                    {
                        snapshot.key &&
                        <div className="card-key">
                            {snapshot.key}
                        </div>
                    }
                    {
                        snapshot.key && snapshot.description &&
                        <div className="card-description">
                            {snapshot.description}
                        </div>
                    }
                </div>
            </div>
            :
            <></>
    );
}
