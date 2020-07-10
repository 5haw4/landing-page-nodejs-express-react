import React from 'react'

export default function Container(props) {
    return (
        <div {...props} style={{padding: "2.5vh 0", margin: "auto", 
            maxWidth: "1250px", ...props.style}}>
            {props.children}
        </div>
    )
}
