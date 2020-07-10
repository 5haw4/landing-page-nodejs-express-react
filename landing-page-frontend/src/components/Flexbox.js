import React from 'react'

import '../styles/components/flexbox.scss'

export default function Flexbox(props) {
    const { leftItems, centerItems, rightItems,
    leftStyle, centerStyle, rightStyle,
    leftClass, centerClass, rightClass } = props
    return (
        <div className="flexbox" style={props.style}>
            {leftItems && <div className={"flexbox " + leftClass} style={leftStyle}>
                {leftItems.map((item,i) => <div key={i}>{item}</div>)}
            </div>}
            {centerItems && <div className={"flexbox " + centerClass} style={centerStyle}>
                {centerItems.map((item,i) => <div key={i}>{item}</div>)}
            </div>}
            {rightItems && <div className={"flexbox " + rightClass} style={rightStyle}>
                {rightItems.map((item,i) => <div key={i}>{item}</div>)}
            </div>}
        </div>
    )
}