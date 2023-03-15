import React from 'react'
import "./tabs.scss"
const Tabs = (props) => {
    const [key, setKey] = React.useState("");

    React.useEffect(() => {
        setKey(props.current)
    }, [props])

    return (
        <div className={`tabBtns ${props.className ?? ""}`} style={props.style}>
            {props.tabs && props.tabs.map((tab, i) =>
                <span className={key === tab.name ? 'active' : ""} key={i.toString()} style={props.childStyle}
                    onClick={(e) => {
                        setKey(tab.name);
                        props.callback && props.callback(tab.name)
                    }}>
                    {tab.name}
                </span>
            )}
        </div>
    )
}

export default Tabs