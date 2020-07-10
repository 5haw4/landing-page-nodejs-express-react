import React from 'react'
import { Icon } from '@blueprintjs/core'

export default function MyLink(props) {
    const { showIcon = true } = props
    const isLocalLink = props.href.startsWith('/') || props.href.startsWith('#');
    props = isLocalLink ? props : {target: "_blank", rel: "noopener noreferrer", ...props}
    delete props.showIcon
    return (
        <a {...props} style={props.style} >
            {props.children}
            {!isLocalLink && showIcon && 
                <Icon icon="arrow-top-right" style={{color: "white"}} />
            }
        </a>
    )
}