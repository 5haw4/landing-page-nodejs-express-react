import React from 'react'
import Flexbox from './Flexbox'
import Button from './Button'
import { H1, H4, H2 } from '@blueprintjs/core'

export default function MainCTA() {
    return (
        <div>
            <Flexbox
                style={{justifyContent: "center"}} 
                leftStyle={{flex: 1}}
                leftItems={[
                    <div style={{textAlign: "center"}}>
                        <H1 style={{fontStyle: "italic", fontSize: "50px"}}>Lorem ipsum dolor sit amet</H1>
                        <H4 style={{fontWeight: "500", fontSize: "21px"}}>Fusco non tempus eros. Phasellus tincidunt mi a velit gravida</H4>
                        <H4 style={{fontWeight: "650", fontStyle: "italic", marginTop: "17.5px", marginBottom: 0}}>with</H4>
                        <H2 style={{marginBottom: 0}}>Phasellus tincidunt</H2>
                        <H1 style={{fontSize: "80px", color: "rgb(190, 22, 34)", fontWeight: "bold", 
                            fontStyle: "italic", padding: "15px 0", margin: 0, wordBreak: "break-all", lineHeight: "70px"}}>PELLENTESQUE</H1>
                        <H2 style={{fontWeight: "bold", fontStyle: "italic", marginTop: "15px", 
                            fontSize: "33px"}}>et sollicitudin ante gravida</H2>
                        <Button large style={{ padding: "15px 25px", marginTop: "15px"}}>
                            <b>BUY OUR AWESOME TOOL!</b>
                        </Button>
                    </div>
                ]}
                rightItems={[
                    <img id="main-mice-img" style={{maxHeight: "400px", width: "400px"}} src="/assets/microphone.svg" alt="microphone" />
                ]}
            />
        </div>
    )
}
