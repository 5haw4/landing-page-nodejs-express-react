import React from 'react'

import Features from './Features'
import Pricing from './Pricing'
import Container from './Container'

export default function BottomSection({ isLoading, prices }) {
    return (
        <div style={{position: "relative"}}>
            <div style={{position: "absolute", bottom: "-5px", left: 0, right: 0, zIndex: "-1"}}>
                <img style={{width: "100vw", marginBottom: "-250px"}} src="/assets/mid_cutter_red.svg" />

                <div style={{position: "relative"}}>
                    <img style={{width: "100vw"}} src="/assets/mid_cutter_grey.svg" />
                    <img style={{width: "100vw", position: "absolute", top: 0, left: 0}} 
                        src="/assets/soundbars_up.svg" />
                </div>
                <div style={{position: "relative"}}>
                    <div style={{position: "absolute", bottom: 0, left: 0, right: 0}}>
                        <img style={{width: "100vw"}} 
                            src="/assets/bottom_cutter_red.svg" />
                        <img style={{width: "100vw", position: "absolute", top: 0, right: 0,
                            maskImage: "url(/assets/bottom_cutter_red.svg)"}} 
                            src="/assets/soundbars_bottom.svg" />
                    </div>
                </div>
            </div>
            <Container>
                <Features />
                <Pricing prices={prices} isLoading={isLoading} />
            </Container>
        </div>
    )
}
