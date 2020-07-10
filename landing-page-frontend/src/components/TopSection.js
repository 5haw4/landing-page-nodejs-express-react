import React from 'react'

import SubNavBar from './SubNavBar'
import MainCTA from './MainCTA'
import Container from './Container'

export default function TopSection({ isLoading, userData }) {
    return (
        <div style={{position: "relative"}}>
            <div style={{position: "absolute", left: 0, top: 0, zIndex: "-1", background: "white",
                height: "100%", display: "flex", flexFlow: "column", justifyContent: "flex-end"}}>
                <img style={{width: "105vw", marginLeft: "-5vw"}} src="/assets/top_cutter_grey.svg" />
                <img style={{width: "105vw", marginLeft: "-5vw", position: "absolute", bottom: 0, 
                    left: 0, right: 0}} src="/assets/top_cutter_red.svg" />
                <img style={{width: "105vw", marginLeft: "-5vw", position: "absolute", bottom: 0, 
                    left: "-2.5px", right: 0}} src="/assets/top_cutter_white.svg" />
                <img style={{width: "70vw", position: "absolute", bottom: "5px", 
                    left: 0, right: 0, zIndex: "-1"}} src="/assets/top_soundwaves.svg" />
            </div>
            <Container>
                <SubNavBar locale={userData.locale} isLoading={isLoading} />
                <MainCTA />
            </Container>
        </div>
    )
}
