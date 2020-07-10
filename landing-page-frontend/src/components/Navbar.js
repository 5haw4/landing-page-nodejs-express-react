import React from 'react'

import Flexbox from './Flexbox'

import '../styles/components/navbar.scss'

export default function Navbar(props) {
    const { ipData = {}, isLoading } = props
    const { location = "", IP = "", flag = "", isExposed = true } = ipData;

    let items = []
    location && items.push(<div>Your Location: <b>{location}</b>{flag && <img src={flag} />}</div>)
    IP && items.push(<div>Your IP: <b>{IP}</b></div>)
    isExposed && items.push(<div>Your Status: <b>EXPOSED</b> <img src="/assets/exclamation-square.svg" /></div>)
    
    return (
        <div id="navbar">
            <Flexbox
                centerClass={isLoading && "bp3-skeleton"}
                centerItems={items}
            />
        </div>
    )
}