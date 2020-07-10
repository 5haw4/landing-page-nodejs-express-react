import React from 'react'
import { H1, H4 } from '@blueprintjs/core'

import Container from './Container'

export default function Description() {
    return (
        <Container>
            <div style={{maxWidth: "900px", textAlign: "center", margin: "5vh auto"}}>
                <H1>PELLENTESQUE AT ORCI VESTIBULUM, VARIUS IPSUM</H1>
                <H4 style={{color: "#BE1622"}}>SED EUISMOD, ERAT ET TEMPUS ULTRICES</H4>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <b>laboris nisi ut aliquip ex ea commodo consequat.</b> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sunt in culpa qui officia est laborum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
            </div>
        </Container>
    )
}
