import React from 'react'

import { Button } from '@blueprintjs/core'

export default function MyButton(props) {
    return (
        <Button intent="danger" {...props}
            style={{ backgroundImage: "url(/assets/soundwaves.svg)", 
                backgroundPosition: "center", backgroundSize: "cover", ...props.style}} 
        />
    )
}
